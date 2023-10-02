<script lang="ts">
	import type { Project } from '$lib/types';
	import { GLASS_HOVER_EFFECT } from '$lib/const';
	import ArrowIcon from './icons/arrow.icon.svelte';

	import { twMerge } from 'tailwind-merge';

	export let project: Project;
</script>

<a
	href={project.link}
	target="_blank"
	class={twMerge('group/project flex flex-col gap-4 p-2 rounded-md lg:group-hover/project-list:opacity-50 lg:hover:opacity-[100!important] md:flex-row lg:p-4', GLASS_HOVER_EFFECT)}
>
	<img class="rounded-md object-contain sm:w-1/2 sm:mx-auto md:w-1/3" src={project.imageUrl} alt={project.name} />

	<div>
		<h5 class="mb-2 block text-md font-medium text-slate-200 group-hover/project:text-teal-300">
			{project.name}
			<ArrowIcon class="inline-block ml-px group-hover/project:translate-x-1 group-hover/project:-translate-y-1 transition-[transform] duration-300" />
		</h5>
		<p class="text-sm lg:group-hover/project:text-slate-200">{project.description}</p>
	</div>
</a>
