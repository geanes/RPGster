// Drawer Singleton
import { drawerStore } from '@skeletonlabs/skeleton';
import type { DrawerSettings } from '@skeletonlabs/skeleton';

export function triggerPlayerDrawer(): void {
	const drawerSettings: DrawerSettings = {
		id: 'menuPlayer',
		// Property Overrides
		position: 'left',
		bgDrawer: 'bg-surface-900',
		bgBackdrop: 'bg-gradient-to-tr from-primary-800/50 via-secondary-800/50 to-tertiary-800/50',
		width: 'w-[280px] md:w-[480px]',
		padding: 'p-4',
		rounded: 'rounded-xl',
		// Metadata
		meta: 'Player Menu'
	};
	drawerStore.open(drawerSettings);
}
