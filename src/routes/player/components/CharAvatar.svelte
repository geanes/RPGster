<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { createAvatar } from '@dicebear/core';
	import { avataaars } from '@dicebear/collection';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { convertHexColor } from '$lib/utils/utils';
	import { currentAvatar, currentHealth, currentAttributes } from '../storeCharacter';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	const popupAvatar: PopupSettings = {
		event: 'click',
		target: 'popupAvatar',
		placement: 'bottom'
	};

	const generateAvatar = (
		seed = $currentAttributes.name,
		backgroundColor = convertHexColor($currentAvatar.bgColor),
		hairColor = convertHexColor($currentAvatar.hair),
		skinColor = convertHexColor($currentAvatar.skin)
	) => {
		const dbAvatar = createAvatar(avataaars, {
			seed: seed,
			backgroundColor: [backgroundColor],
			hairColor: [hairColor],
			skinColor: [skinColor]
		});
		return dbAvatar.toDataUriSync();
	};

	let userAvatar = generateAvatar();
	$: {
		const currentAvatarSeed: string = !$currentAvatar.customSeed
			? $currentAttributes.name
			: $currentAvatar.customSeed;
		userAvatar = generateAvatar(
			currentAvatarSeed,
			convertHexColor($currentAvatar.bgColor),
			convertHexColor($currentAvatar.hair),
			convertHexColor($currentAvatar.skin)
		);
	}

	let hpRing: number = 100;
	let ringMeter: string = 'stroke-primary-500';
	let ringTrack: string = 'stroke-surface-500/30';
	$: {
		hpRing = Math.round(($currentHealth.currentHP / $currentHealth.maxHP) * 100);
		if ($currentHealth.currentHP > $currentHealth.maxHP) {
			ringMeter = 'stroke-secondary-500';
			ringTrack = 'stroke-primary-500';
		} else if ($currentHealth.currentHP < 0) {
			ringMeter = 'stroke-error-500';
		} else if (hpRing <= 25) {
			ringMeter = 'stroke-warning-500';
			ringTrack = 'stroke-surface-500/30';
		} else {
			ringMeter = 'stroke-primary-500';
			ringTrack = 'stroke-surface-500/30';
		}
	}
</script>

<div class="grid grid-cols-1 grid-rows-1 absolute top-2 right-4 z-30">
	<!-- Health radial -->
	<div class="align-self-center justify-self-center row-start-1 col-start-1 z-40">
		<ProgressRadial value={hpRing} width="w-28" meter={ringMeter} track={ringTrack} stroke={60} />
	</div>
	<!-- Avatar -->
	<div
		class="align-self-center justify-self-center row-start-1 col-start-1 p-2 z-50"
		use:popup={popupAvatar}
	>
		<Avatar
			src={$currentAvatar.link ? $currentAvatar.link : userAvatar}
			alt="avatar"
			width="w-24"
			rounded="rounded-full"
			cursor="cursor-pointer"
			border="hover:border-2 border-surface-500/50"
			shadow="shadow-2xl hover:shadow-xl"
		/>
	</div>
</div>
<!-- Avatar popup -->
<div class="card p-4 w-72 shadow-xl z-50" data-popup="popupAvatar">
	<div>
		<ul>
			<li>
				<label class="label col-span-2">
					<span class="text-xs text-slate-50/50">Avatar Link</span>
					<input
						type="text"
						class="input variant-form-material"
						placeholder="Avatar link..."
						alt="Avatar Link"
						bind:value={$currentAvatar.link}
					/>
				</label>
			</li>
			<li>
				<label class="label col-span-2">
					<span class="text-xs text-slate-50/50">Avatar Seed</span>
					<input
						type="text"
						class="input variant-form-material"
						placeholder="Avatar seed..."
						alt="Avatar Seed"
						bind:value={$currentAvatar.customSeed}
					/>
				</label>
			</li>
			<li>
				<div class="grid grid-cols-4">
					<label class="label">
						<span class="text-xs text-slate-50/50">Eyes</span>
						<br />
						<input
							id="cEyes"
							class="input place-self-center"
							type="color"
							placeholder="Eyes"
							bind:value={$currentAvatar.eyes}
						/>
					</label>
					<label class="label">
						<span class="text-xs text-slate-50/50">Hair</span>
						<br />
						<input
							id="cHair"
							class="input"
							type="color"
							placeholder="Hair"
							bind:value={$currentAvatar.hair}
						/>
					</label>
					<label class="label">
						<span class="text-xs text-slate-50/50">Skin</span>
						<br />
						<input
							id="cSkin"
							class="input"
							type="color"
							placeholder="Skin"
							bind:value={$currentAvatar.skin}
						/>
					</label>
					<label class="label">
						<span class="text-xs text-slate-50/50">Background</span>
						<br />
						<input
							id="avatarBG"
							class="input"
							type="color"
							placeholder="Avatar Background"
							bind:value={$currentAvatar.bgColor}
						/>
					</label>
				</div>
			</li>
			<li>
				<a class="anchor" href="https://www.dicebear.com/playground?style=avataaars"
					>Design at Dicebear</a
				>
			</li>
		</ul>
	</div>
	<div class="arrow bg-surface-100-800-token" />
</div>
