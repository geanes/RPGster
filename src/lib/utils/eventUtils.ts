import NDK, { NDKEvent } from '@nostr-dev-kit/ndk';
import type { NDKUserProfile, NDKTag, NostrEvent } from '@nostr-dev-kit/ndk';
import { nip19 } from 'nostr-tools';
import { generateRandomId, unixTimeNow } from './helpers';
import type { AddressPointer } from 'nostr-tools/lib/nip19';

// const kPlayer = 31974;
// const kHost = 31973;
// const kElement = 31972;

function parseNaddrString(
	input: string,
	marker?: string
): { kind: number; pubkey: string; identifier: string; tag: NDKTag } {
	const tagString = input.startsWith('nostr:') ? input.substring(6) : input;
	const pointer = nip19.decode(tagString).data as AddressPointer;
	const { kind, pubkey, identifier } = pointer;
	const pointerURI = `${kind}:${pubkey}:${identifier}`;
	const tag: NDKTag = ['a', `${pointerURI}`, ''];
	if (marker !== undefined) tag.push(marker);
	return { ...pointer, tag };
}

function parseEventOrString(
	input: NDKEvent | string,
	marker = ''
): { kind: number | undefined; pubkey: string; identifier: string; tag: NDKTag } {
	let tag: NDKTag;
	if (typeof input === 'string') {
		return parseNaddrString(input, marker);
	}
	const identifier = input.replaceableDTag();
	tag = input.tagReference();
	tag = marker ? (tag = [...tag, '', marker]) : tag;
	return { kind: input.kind, pubkey: input.pubkey, identifier, tag };
}

// Generate Root Event
export function generateRoot({
	ndk,
	kind,
	user,
	name,
	desc,
	content,
	system,
	image,
	game,
	gameId
}: {
	ndk: NDK;
	kind: number;
	user: NDKUserProfile;
	name: string;
	desc: string;
	content: string;
	system?: string;
	image?: string;
	game?: string;
	gameId?: NDKTag | string;
}): NDKEvent {
	const pubkey = user.pubkey !== undefined ? user.pubkey : '';
	const event: NostrEvent = {
		created_at: unixTimeNow(),
		kind: kind,
		pubkey: pubkey,
		tags: [
			['d', generateRandomId()],
			['d', 'root'],
			['name', name],
			['desc', desc]
		],
		content: content
	};

	if (system !== undefined) event.tags.push(['system', system]);
	if (image !== undefined) event.tags.push(['image', image]);
	if (game !== undefined) event.tags.push(['game', game]);
	if (gameId !== undefined) {
		const gameTag = typeof gameId === 'string' ? parseNaddrString(gameId, 'game').tag : gameId;
		event.tags.push(gameTag);
	}
	const root = new NDKEvent(ndk, event);
	return root;
}

// Generate child event
export function generateChild({
	ndk,
	root,
	childType,
	content,
	gameData
}: {
	ndk: NDK;
	root: NDKEvent | string;
	childType: string;
	content: string;
	gameData?: NDKTag | string;
}): NDKEvent {
	const { kind, pubkey, identifier, tag } = parseEventOrString(root, 'root');
	const childIdentifier = `${identifier}_${childType}`;

	const event: NostrEvent = {
		created_at: unixTimeNow(),
		kind: kind,
		pubkey: pubkey,
		tags: [
			['d', childIdentifier],
			['d', childType]
		],
		content: content
	};

	if (tag !== undefined) event.tags.push(tag);
	if (gameData !== undefined) {
		const gameDat =
			typeof gameData === 'string' ? parseNaddrString(gameData, 'game').tag : gameData;
		event.tags.push(gameDat);
	}
	const child = new NDKEvent(ndk, event);
	return child;
}

export function generateCharacter({
	ndk,
	kind,
	user,
	name,
	desc,
	content,
	system,
	image,
	stateContent = '',
	inventoryContent = '',
	actionsContent = '',
	game,
	gameId
}: {
	ndk: NDK;
	kind: number;
	user: NDKUserProfile;
	name: string;
	desc: string;
	content: string;
	system?: string;
	image?: string;
	stateContent?: string;
	inventoryContent?: string;
	actionsContent?: string;
	game?: string;
	gameId?: NDKTag | string;
}): NDKEvent[] {
	const root = generateRoot({ ndk, kind, user, name, desc, content, system, image, game, gameId });
	const state = generateChild({ ndk, root, childType: 'state', content: stateContent });
	const inventory = generateChild({ ndk, root, childType: 'inventory', content: inventoryContent });
	// const actions = generateChild(ndk, root, childType: 'actions', content: actionsContent);
	root.sign();
	// return [root, state, inventory, actions];
	return [root, state, inventory];
}
