import './bootstrap';
import '../css/app.css';
import '../css/style.css';
import "quasar/src/css/index.sass";

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

import { Quasar, Dialog, AppFullscreen, Loading, Notify } from "quasar";

// Import icon libraries
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {

      const app = createApp({ render: () => h(App, props) });
      app.use(plugin);
      app.use(ZiggyVue, Ziggy)
      app.use(Quasar, {
        plugins: {
          AppFullscreen,
          Dialog,
          Loading,
          Notify,
        },
      });
      app.mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
