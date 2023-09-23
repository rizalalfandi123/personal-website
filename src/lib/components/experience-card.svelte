<script lang="ts">
	import ArrowIcon from './icons/arrow.icon.svelte';
	import LinkIcon from './icons/link.icon.svelte';

	import type { Experience } from '$lib/types';
	import { twMerge } from 'tailwind-merge';
	import { GLASS_HOVER_EFFECT } from '$lib/const';

	export let experince: Experience;
</script>

<div
	class={twMerge(
		'rounded-lg group/experience-card flex flex-col gap-1 sm:flex-row sm:gap-4 sm:justify-between lg:p-6 lg:group-hover/experience-list:opacity-50 lg:hover:opacity-[100!important]',
		GLASS_HOVER_EFFECT
	)}
>
	<p class="text-slate-500 text-sm mb-2 mt-1 tracking-wide font-semibold sm:w-[27%] lg:mb-0 lg:group-hover/experience-list:text-slate-200">{experince.duration}</p>
	<div class="sm:w-[73%] space-y-2">
		<a href="https://zahiraccounting.com/" class="mb-2 block text-md text-slate-200 font-medium group-hover/experience-card:text-teal-300" target="_blank">
			{experince.position} | {experince.company}
			<ArrowIcon class="inline-block ml-px group-hover/experience-card:translate-x-1 group-hover/experience-card:-translate-y-1 transition-[transform] duration-300" />
		</a>

		<p class="text-sm lg:group-hover/experience-list:text-slate-200">
			{experince.description}
		</p>

		{#if experince.products.length > 0}
			<ul class="flex flex-wrap" aria-label="Related links">
				{#each experince.products as product (product.name)}
					<li class="mr-4">
						<a
							class="inline-flex items-center text-xs font-medium text-slate-300 gap-1.5 hover:text-teal-300 focus-visible:text-teal-300"
							href={product.link}
							target="_blank"
							rel="noreferrer"
						>
							<LinkIcon />
							<span>{product.name}</span></a
						>
					</li>
				{/each}
			</ul>
		{/if}

		{#if experince.skills.length > 0}
			<div class="flex flex-wrap gap-2">
				{#each experince.skills as skil}
					<div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{skil}</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
