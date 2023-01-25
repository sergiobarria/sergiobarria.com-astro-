import { CollectionConfig } from 'payload/types';

export const Categories: CollectionConfig = {
	slug: 'categories',
	admin: {
		useAsTitle: 'name',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'name',
			type: 'text',
		},
	],
	timestamps: false,
};
