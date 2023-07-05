export interface User {
	pubkey: string;
	npub?: string;
	name?: string;
	displayName?: string;
	image?: string;
	banner?: string;
	bio?: string;
	nip05?: string;
	lud16?: string;
	about?: string;
	zapService?: string;
	lastFetched?: number;
	relayUrls?: string[];
}
