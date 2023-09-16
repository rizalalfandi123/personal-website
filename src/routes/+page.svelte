<script lang="ts">
	import { onMount } from 'svelte';
	import SectionTitle from '$lib/components/section-title.svelte';
	import ExperienceCard from '$lib/components/experience-card.svelte';
	import NavLink from '$lib/components/nav-link.svelte';
	
	import { experiences } from '$lib/data/experiences';
	import { useActiveSection } from '$lib/utils/use-active-section';
	import { contacts } from '$lib/data/contacts';

	import type { NavigationItem } from '$lib/types';

	let activeSectionId: string = 'about';

	let mouseX = 0;
	let mouseY = 0;

	let cursorX = 0;
	let cursorY = 0;

	let speed = 0.25;

	let cursor: HTMLDivElement | null = null;

	function animate() {
		let distX = mouseX - cursorX;
		let distY = mouseY - cursorY;

		cursorX = cursorX + distX * speed;
		cursorY = cursorY + distY * speed;

		if (cursor) {
			cursor.style.left = cursorX + 'px';
			cursor.style.top = cursorY + 'px';
		}

		if (typeof window !== 'undefined') {
			requestAnimationFrame(animate);
		}
	}

	animate();

	useActiveSection({
		sectionQuerySelector: '.main-scroll-section',
		changeCallback: (newActiveSectionId) => {
			if (newActiveSectionId !== activeSectionId) activeSectionId = newActiveSectionId;
		}
	});

	onMount(() => {
		document.addEventListener('mousemove', (event) => {
			mouseX = event.pageX;
			mouseY = event.pageY;
		});

		cursor = document.querySelector('.bg__gradient');
	});

	const navigations: Array<NavigationItem> = [
		{ link: '#about', name: 'About' },
		{ link: '#experience', name: 'Experince' },
		{ link: '#projects', name: 'Projects' }
	];
</script>

<svelte:head>
	<title>Rizal Alfandi</title>
	<meta name="description" content="About Rizal Alfandi" />
</svelte:head>

<div class="lg:flex lg:justify-between lg:gap-4">
	<header class="space-y-8 lg:w-[40%] lg:py-24 lg:max-h-[100dvh] lg:flex lg:flex-col lg:justify-between lg:sticky lg:top-0">
		<div>
			<div class="space-y-3 lg:space-y-4">
				<h1 class="text-4xl font-bold text-slate-200 tracking-tight sm:text-5xl">Rizal Alfandi</h1>

				<h2 class="text-lg text-slate-200 lg:text-xl">Frontend Web Developer</h2>

				<p>Bringing Digital Dreams to Life, Pixel by Pixel, with HTML, CSS, and JavaScript Excellence</p>
			</div>

			<nav class="hidden pt-8 lg:block">
				<ul class="space-y-1">
					{#each navigations as navigation (navigation.link)}
						<NavLink isActive={navigation.link === `#${activeSectionId}`} {navigation} />
					{/each}
				</ul>
			</nav>
		</div>

		<ul class="flex gap-4">
			{#each contacts as contact (contact.platform)}
				<li>
					<a href={contact.link} class="hover:text-slate-200" target="_blank">
						<span class="sr-only" />
						<svelte:component this={contact.icon} />
					</a>
				</li>
			{/each}
		</ul>
	</header>

	<main class="py-20 space-y-12 lg:space-y-20 lg:w-[60%] lg:py-24">
		<section id="about" class="main-scroll-section scroll-mt-24">
			<SectionTitle title="About" />
			<article class="space-y-4">
				<p>
					I'm a frontend web developer with more then 2 years of experience and a strong focus on creating visually appealing, user-friendly websites. I'm well-versed in popular
					frameworks like React, Angular, Vue or Svelte, which I use to build responsive and cross-browser compatible designs. I am dedicated to optimizing website performance to
					deliver a seamless user experience.
				</p>
				<p>
					My journey into web development started with a fascination for the limitless possibilities of the web, and I've continued to learn and grow through these courses and
					bootcamps. Let's collaborate to bring your web project to life.
				</p>
			</article>
		</section>

		<section id="experience" class="main-scroll-section scroll-mt-24">
			<SectionTitle title="Experience" />

			<ul class="group/experience-list space-y-6 lg:space-y-2">
				{#each experiences as experience, index (index)}
					<li>
						<ExperienceCard experince={experience} />
					</li>
				{/each}
			</ul>
		</section>
	</main>
</div>
