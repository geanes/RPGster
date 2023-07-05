import { writable } from '@svelte-kits/store';
import NDK from '@nostr-dev-kit/ndk';

const ndk = new NDK({
	explicitRelayUrls: [
		// 'wss://purplepag.es',
		// 'wss://relay.nostr.band',
		'wss://nos.lol',
		'wss://relay.snort.social',
		'wss://relay.damus.io'
	],
	debug: false
});

// Create a singleton instance that is the default export
const ndkStore = writable(ndk);

export default ndkStore;

export const connected = writable(false);
