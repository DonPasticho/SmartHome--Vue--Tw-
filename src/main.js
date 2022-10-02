import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')

const navBtn = document.querySelector('#menu')
const menuBar = document.querySelector('[role="menuBar"]') 

navBtn.addEventListener('click', () => {
    const isExpanded = JSON.parse(navBtn.getAttribute
        ('aria-expanded'));
        navBtn.setAttribute('aria-expanded', !isExpanded);
        menuBar.classList.toggle('hidden');
        menuBar.classList.toggle('flex');
})