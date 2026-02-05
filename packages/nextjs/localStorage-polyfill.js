// Polyfill localStorage for SSG build workers
// next-themes and RainbowKit call localStorage.getItem during prerendering
if (typeof globalThis.localStorage === "undefined") {
  globalThis.localStorage = {
    _data: {},
    getItem(key) { return this._data[key] ?? null; },
    setItem(key, value) { this._data[key] = String(value); },
    removeItem(key) { delete this._data[key]; },
    clear() { this._data = {}; },
    key(index) { return Object.keys(this._data)[index] ?? null; },
    get length() { return Object.keys(this._data).length; },
  };
}
