import { drawerStore } from '@skeletonlabs/skeleton';
import type { ModalSettings } from '@skeletonlabs/skeleton';
import { modalStore } from '@skeletonlabs/skeleton';

export function modalExportChar(): void {
	const modal: ModalSettings = {
		type: 'component',
		component: 'modalExportCharJson',
		title: 'Character Sheet JSON'
		// response: (r: any) => console.log('response:', r)
	};
	drawerStore.close();
	modalStore.trigger(modal);
}
export function modalImportChar(): void {
	const modal: ModalSettings = {
		type: 'component',
		component: 'modalImportCharJson',
		title: 'Paste Character Sheet JSON'
		// response: (r: any) => console.log('response:', r)
	};
	drawerStore.close();
	modalStore.trigger(modal);
}
