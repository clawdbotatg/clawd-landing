#!/usr/bin/env node
// Direct BGIPFS upload using the fetch API (X-API-Key header)
import { readFileSync, readdirSync, statSync } from "fs";
import { join, relative } from "path";
import FormData from "form-data";
import fetch from "node-fetch";

const API_KEY = process.env.BGIPFS_KEY;
const UPLOAD_URL = "https://upload.bgipfs.com/api/v0/add";
const OUT_DIR = "./out";

function walkDir(dir, base = dir) {
  const entries = readdirSync(dir);
  let files = [];
  for (const entry of entries) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      files = files.concat(walkDir(full, base));
    } else {
      files.push({ full, rel: relative(base, full) });
    }
  }
  return files;
}

async function upload() {
  const files = walkDir(OUT_DIR);
  console.log(`Uploading ${files.length} files...`);

  const form = new FormData();
  for (const { full, rel } of files) {
    form.append("file", readFileSync(full), {
      filename: rel,
      filepath: rel,
      knownLength: statSync(full).size,
    });
  }

  const response = await fetch(
    `${UPLOAD_URL}?wrap-with-directory=true&cid-version=1`,
    {
      method: "POST",
      headers: {
        "X-API-Key": API_KEY,
        ...form.getHeaders(),
      },
      body: form,
    }
  );

  if (!response.ok) {
    const err = await response.text();
    console.error("Upload failed:", response.status, err);
    process.exit(1);
  }

  // Response is newline-delimited JSON
  const text = await response.text();
  const lines = text.trim().split("\n").filter(Boolean);
  const parsed = lines.map((l) => JSON.parse(l));

  // The last entry with empty name is the root directory
  const root = parsed.find((p) => p.Name === "" || p.Name === "out");
  const cid = root?.Hash || parsed[parsed.length - 1]?.Hash;

  console.log(`\n🚀 Upload complete!`);
  console.log(`CID: ${cid}`);
  console.log(`URL: https://community.bgipfs.com/ipfs/${cid}`);
  console.log(`\nNext: update ENS contenthash on clawdbotatg.eth to /ipfs/${cid}`);
}

upload().catch((e) => {
  console.error(e);
  process.exit(1);
});
