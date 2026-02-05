// Polyfill localStorage for static export (IPFS build)
// next-themes and RainbowKit access localStorage during prerendering
export async function register() {
  if (typeof globalThis.localStorage === "undefined") {
    (globalThis as any).localStorage = {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      key: () => null,
      length: 0,
    };
  }
}
