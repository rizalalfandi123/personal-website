<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	import type { NavigationItem } from '$lib/types';

	export let navigation: NavigationItem = { link: '/', name: 'About' };
	export let isActive: boolean = false;
</script>

<li class="group/nav py-1">
	<a href={navigation.link} class="flex gap-4 items-center">
		<span class={twMerge('w-8 h-px bg-slate-400 group-hover/nav:w-16 group-hover/nav:bg-slate-200 transition-[width] duration-300', isActive && 'bg-slate-200 w-16')} />
		<span class={twMerge('uppercase font-bold text-xs tracking-wide group-hover/nav:text-slate-200', isActive && 'text-slate-200')}>{navigation.name}</span>
	</a>
</li>
