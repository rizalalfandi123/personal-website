import type { Contect } from '$lib/types';

import GithubIcon from '$lib/components/icons/github.icon.svelte';
import LinkedInIcon from '$lib/components/icons/linkedin.icon.svelte';
import TelegramIcon from '$lib/components/icons/telegram.icon.svelte';
import MailIcon from '$lib/components/icons/mail.icon.svelte';

export const contacts: Array<Contect> = [
	{ link: 'https://github.com/rizalalfandi123/', platform: 'Github', icon: GithubIcon },
	{ link: 'https://www.linkedin.com/in/rizal-alfandi/', platform: 'Linked In', icon: LinkedInIcon },
	{ link: 'https://telegram.me/RizalAlfandi', platform: 'Instagram', icon: TelegramIcon },
	{ link: 'mailto:rizalalfandi123456789@gmail.com"', platform: 'Email', icon: MailIcon }
];
