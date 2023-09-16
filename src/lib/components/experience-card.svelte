<script lang="ts">
	import type { Experience } from '$lib/types';

	export let experince: Experience;
</script>

<div
	class="p-6 rounded-lg group/experience-card flex flex-col gap-1 sm:flex-row sm:gap-4 sm:justify-between lg:group-hover/experience-list:opacity-50 lg:hover:opacity-[100!important] lg:hover:bg-slate-800/40 lg:hover:shadow-[inset_22_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg transition-all"
>
	<p class="text-slate-500 text-sm mb-2 tracking-wide font-semibold sm:w-1/4 lg:mb-0 lg:group-hover/experience-list:text-slate-200">{experince.duration}</p>
	<div class="sm:w-3/4 space-y-2">
		<a href="https://zahiraccounting.com/" class="mb-2 block text-lg text-slate-200 font-medium group-hover/experience-card:text-teal-300 lg:mb-3" target="_blank">
			{experince.position} | {experince.company}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="h-5 w-5 inline-block ml-px group-hover/experience-card:translate-x-1 group-hover/experience-card:-translate-y-1 transition-[transform] duration-300"
				aria-hidden="true"
				><path
					fill-rule="evenodd"
					d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>

		<p class="lg:group-hover/experience-list:text-slate-200">
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
							><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3" aria-hidden="true"
								><path
									d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"
								/><path
									d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"
								/></svg
							><span>{product.name}</span></a
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
