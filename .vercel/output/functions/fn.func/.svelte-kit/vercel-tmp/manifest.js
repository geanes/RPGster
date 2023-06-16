export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","systems/dnd3.5e/.DS_Store","systems/dnd3.5e/data/.DS_Store","systems/dnd3.5e/data/alignments.json","systems/dnd3.5e/data/classes.json","systems/dnd3.5e/data/equipment.json","systems/dnd3.5e/data/feats.json","systems/dnd3.5e/data/languages.json","systems/dnd3.5e/data/levels.json","systems/dnd3.5e/data/protection.json","systems/dnd3.5e/data/races.json","systems/dnd3.5e/data/skills.json","systems/dnd3.5e/data/spells.json","systems/dnd3.5e/data/weapons.json"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.3e12d7af.js","app":"_app/immutable/entry/app.3f0b0f7e.js","imports":["_app/immutable/entry/start.3e12d7af.js","_app/immutable/chunks/index.0c0a85a8.js","_app/immutable/chunks/singletons.2e3f5c09.js","_app/immutable/entry/app.3f0b0f7e.js","_app/immutable/chunks/index.0c0a85a8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/gamemaster",
				pattern: /^\/gamemaster\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/player",
				pattern: /^\/player\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
