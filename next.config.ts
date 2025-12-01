import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactCompiler: true,
	sassOptions: {
		silenceDeprecations: ['import', 'legacy-js-api'],
	},
};

export default nextConfig;
