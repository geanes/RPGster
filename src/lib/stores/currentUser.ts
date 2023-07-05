import { writable } from '@svelte-kits/store';
import type { NDKUserProfile } from '@nostr-dev-kit/ndk';

export const currentUser = writable<NDKUserProfile | undefined>(undefined);
export const currentUserRelays = writable<string[]>([]);
