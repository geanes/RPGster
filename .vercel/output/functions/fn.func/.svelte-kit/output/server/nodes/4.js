import * as universal from '../entries/pages/player/_page.ts.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/player/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/player/+page.ts";
export const imports = ["_app/immutable/nodes/4.099031f4.js","_app/immutable/chunks/index.0c0a85a8.js","_app/immutable/chunks/iconify-icon.b95c2c63.js","_app/immutable/chunks/singletons.91ed9a0e.js"];
export const stylesheets = ["_app/immutable/assets/iconify-icon.ed8c0b75.css"];
export const fonts = [];
