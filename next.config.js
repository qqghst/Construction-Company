/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		unoptimized: true
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						native: true
					}
				}
			]
		})

		return config
	}
}

module.exports = nextConfig
