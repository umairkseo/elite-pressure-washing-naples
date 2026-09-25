export interface ServiceInfo {
	slug: string;
	name: string;
	shortDescription: string;
	intro: string;
	metaDescription: string;
}

export const services: ServiceInfo[] = [
	{
		slug: 'house-washing',
		name: 'House Washing',
		shortDescription: 'Refresh the look of your home’s exterior, from siding to trim.',
		intro: 'A considered exterior wash, planned around your home’s materials and features. Add confirmed methods, inclusions, and preparation details here.',
		metaDescription: 'House washing in Naples, Florida. Add confirmed service details and coverage before publishing.',
	},
	{
		slug: 'roof-cleaning',
		name: 'Roof Cleaning',
		shortDescription: 'Give your roof a cleaner appearance with a surface-appropriate approach.',
		intro: 'Roof cleaning details belong here. Describe the roof types served, the method used, and any preparation or limitations after confirming them with the business.',
		metaDescription: 'Roof cleaning in Naples, Florida. Add confirmed service details and coverage before publishing.',
	},
	{
		slug: 'driveway-cleaning',
		name: 'Driveway Cleaning',
		shortDescription: 'Clean up the first thing you see when you pull in.',
		intro: 'Describe the driveway materials accepted, the cleaning process, and any access requirements here after confirming the service details.',
		metaDescription: 'Driveway cleaning in Naples, Florida. Add confirmed service details and coverage before publishing.',
	},
	{
		slug: 'paver-cleaning',
		name: 'Paver Cleaning',
		shortDescription: 'Bring patios, walks, and other paved spaces back into focus.',
		intro: 'Use this space to explain which paver surfaces are served and whether joint sand, sealing, or other related work is available.',
		metaDescription: 'Paver cleaning in Naples, Florida. Add confirmed service details and coverage before publishing.',
	},
	{
		slug: 'pool-cage-lanai-cleaning',
		name: 'Pool Cage & Lanai Cleaning',
		shortDescription: 'Refresh the outdoor room that makes Naples living special.',
		intro: 'Describe the pool cage and lanai surfaces included, along with access, preparation, and pool-area protection details once confirmed.',
		metaDescription: 'Pool cage and lanai cleaning in Naples, Florida. Add confirmed service details and coverage before publishing.',
	},
	{
		slug: 'soft-washing',
		name: 'Soft Washing',
		shortDescription: 'A lower-pressure cleaning option for suitable exterior surfaces.',
		intro: 'Explain where soft washing is appropriate, what cleaning products are used, and any plant or property protections after verifying the process.',
		metaDescription: 'Soft washing in Naples, Florida. Add confirmed service details and coverage before publishing.',
	},
	{
		slug: 'commercial-pressure-washing',
		name: 'Commercial Pressure Washing',
		shortDescription: 'Exterior cleaning options for local commercial properties.',
		intro: 'Add the property types served, scheduling options, and any commercial insurance or access details once confirmed with the business.',
		metaDescription: 'Commercial pressure washing in Naples, Florida. Add confirmed service details and coverage before publishing.',
	},
];
