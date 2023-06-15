import { c as create_ssr_component } from "../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="grid h-screen place-items-center"><div class="grid grid-cols-3 gap-4 content-center"><div class="flex items-center text-end"><h3><a href="./gamemaster">Game Master</a></h3></div>
		<span class="divider-vertical h-48"></span>
		<div class="flex items-center text-start"><h3><a href="./player">Player</a></h3></div></div></section>`;
});
export {
  Page as default
};
