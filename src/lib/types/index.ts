export interface Contect {
	platform: string;
	icon: any;
	link: string;
}

export interface NavigationItem {
	name: string;
	link: string;
}

export interface Experience {
	position: string;
	company: string;
	description: string;
	companyWebsite: string;
	skills: Array<string>;
	products: Array<{ link: string; name: string }>;
	duration: string;
}

export interface Project {
	name: string;
	imageUrl: string;
	description: string;
}
