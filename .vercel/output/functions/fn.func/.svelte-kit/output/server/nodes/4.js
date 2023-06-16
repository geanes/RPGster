import * as universal from '../entries/pages/player/_page.ts.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/player/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/player/+page.ts";
export const imports = ["_app/immutable/nodes/4.edff2faa.js","_app/immutable/chunks/index.0c0a85a8.js","_app/immutable/chunks/iconify-icon.f433f7b4.js","_app/immutable/chunks/singletons.2e3f5c09.js"];
export const stylesheets = ["_app/immutable/assets/iconify-icon.ed8c0b75.css"];
export const fonts = [];
