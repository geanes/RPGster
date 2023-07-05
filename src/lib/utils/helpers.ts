// import { nip19 } from 'nostr-tools';
import type { NDKEvent } from '@nostr-dev-kit/ndk';

export function unixTimeNow() {
	return Math.floor(new Date().getTime() / 1000);
}

export function dateTomorrow() {
	return new Date(Date.now() + 3600 * 1000 * 24);
}

export function truncatedBech(bech32: string, length?: number): string {
	return `${bech32.substring(0, length || 9)}...`;
}
