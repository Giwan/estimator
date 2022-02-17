
import adapter from '@sveltejs/adapter-netlify';
// let { default: adapter } = await import('@sveltejs/adapter-netlify');
// import adapter from '@sveltejs/adapter-auto';
// const adapter = require("@sveltejs/adapter-netlify");

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(),
	}
};

export default config;
// module.exports = config;
