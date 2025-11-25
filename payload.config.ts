import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: 'users',
		meta: {
			titleSuffix: '— Philly Melee',
		},
	},
	collections: [
		// Users collection (required for auth)
		{
			slug: 'users',
			auth: true,
			admin: {
				useAsTitle: 'email',
			},
			fields: [
				{
					name: 'name',
					type: 'text',
					required: true,
				},
				{
					name: 'role',
					type: 'select',
					options: [
						{ label: 'Admin', value: 'admin' },
						{ label: 'Editor', value: 'editor' },
					],
					defaultValue: 'editor',
					required: true,
				},
			],
		},
		// Media collection for images/files
		{
			slug: 'media',
			upload: {
				staticDir: path.resolve(dirname, 'public/media'),
				mimeTypes: ['image/*'],
			},
			fields: [
				{
					name: 'alt',
					type: 'text',
					required: true,
				},
			],
		},
	],
	editor: lexicalEditor({}),
	secret: process.env.PAYLOAD_SECRET ?? '',
	typescript: {
		outputFile: path.resolve(dirname, 'payload-types.ts'),
	},
	db: postgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URI ?? '',
		},
	}),
});
