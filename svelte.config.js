import sveltePreprocess from 'svelte-preprocess';
import adapterAuto from '@sveltejs/adapter-auto';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
export default {
    extensions: ['.svelte'],

    preprocess: [
        sveltePreprocess({
            postcss: true,
        })
    ],
    kit: {
        prerender: {
            default: false,
        },
        adapter: adapterAuto(),
        files: {
            assets: 'static',
            lib: "src/lib",
        },
        alias: {
            $lib: path.resolve('src/lib'),
            $stores: path.resolve('src/stores'),
            $utilities: path.resolve('src/utilities'),
            $layout: path.resolve('src/layout'),
            $content: path.resolve('src/content'),
            $locale: path.resolve('src/locale'),
            $element: path.resolve('src/element'),
            $component: path.resolve('src/component'),
        }
    },
};
