<script lang="ts">
	import { MenuIcon, X } from 'lucide-svelte';
	import { createDialog, melt } from '@melt-ui/svelte';
	import { fade, fly } from 'svelte/transition';

	const {
		elements: { trigger, overlay, content, title, description, close, portalled },
		states: { open }
	} = createDialog();
</script>

<button use:melt={$trigger} class="p-0.5 active:scale-90 transition-[transform] md:hidden">
	<MenuIcon class="hover:text-slate-50" />
</button>

<div use:melt={$portalled} class="md:hidden">
	{#if $open}
		<div use:melt={$overlay} class="fixed inset-0 z-50 max-w-[420px] bg-primary-background" transition:fade={{ duration: 200 }}>test</div>

		<!-- <div
			use:melt={$content}
			class="fixed left-0 top-0 z-50 h-screen w-full max-w-[350px] bg-white p-6
			  shadow-lg focus:outline-none"
			transition:fly={{
				x: -350,
				duration: 300,
				opacity: 1
			}}
		>
			<button
				use:melt={$close}
				aria-label="Close"
				class="absolute right-[10px] top-[10px] inline-flex h-6 w-6
				  appearance-none items-center justify-center rounded-full text-magnum-800
				  hover:bg-magnum-100 focus:shadow-magnum-400 focus:outline-none focus:ring-2
				  focus:ring-magnum-400"
			>
				<X class="square-4" />
			</button>
			<h2 use:melt={$title} class="mb-0 text-lg font-medium text-black">Notifications</h2>
			<p use:melt={$description} class="mb-5 mt-2 leading-normal text-zinc-600">
				Check out your latest updates.
			</p>
			<section>
				<div class="rounded-md bg-gray-100/80 p-4 text-zinc-800 shadow">
					<h3 class="mb-3 text-base font-semibold">New invitation</h3>
					<p class="text-sm">
						You have been invited to join the <strong>Designers</strong> team.
					</p>
					<div class="mt-6 flex justify-end gap-4">
						<button
							class="inline-flex h-8 items-center justify-center
							  rounded-[4px] bg-zinc-100 px-4 font-medium leading-none
							  text-zinc-600 focus:outline-none focus:ring-2
							  focus:ring-magnum-400"
						>
							Reject
						</button>
						<button
							class="inline-flex h-8 items-center justify-center
							  rounded-[4px] bg-magnum-100 px-4 font-medium leading-none
							  text-magnum-900 focus:outline-none focus:ring-2
							  focus:ring-magnum-400"
						>
							Accept
						</button>
					</div>
				</div>
			</section>
		</div> -->
	{/if}
</div>
