import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"

import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faNavicon,
    faSearch,
    faLocationDot
} from "@fortawesome/free-solid-svg-icons"

library.add( faNavicon, faSearch, faLocationDot);

createApp(App).mount('#app')
