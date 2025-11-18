# 🚀 Counter Professional — Vue 3 Project

A clean, scalable, and professional Vue 3 project built using Vite.  
This project demonstrates **core Vue concepts**, **reusable UI components**,  
**Composition API**, **composables**, **project architecture**, and **clean code** best practices.

---

## 📌 Tech Stack

- ⚡ **Vite** — Fast bundler & dev server  
- 🖼 **Vue 3** — Composition API  
- 🛣 **Vue Router** — Page navigation  
- 🎨 **Custom UI Kit** — Reusable components  
- 🧩 **Composables** — Extracted business logic  
- 📁 **Modular Architecture**  

---

## 📁 Project Structure


├─ components/
│ ├─ ui/
│ │ ├─ BaseButton.vue
│ │ └─ BaseCard.vue
│ └─ counter/
│ └─ CounterPro.vue
│
├─ composables/
│ └─ useCounter.js
│
├─ views/
│ └─ HomeView.vue
│
├─ router/
│ └─ index.js
│
├─ App.vue
└─ main.js


---

## 🎯 Main Concepts Learned

### ✅ 1. **Composition API (ref, reactive, computed)**
Used inside composables and components:

- `ref()` → primitive reactive values  
- `reactive()` → objects reactive state  
- `computed()` → derived values (e.g. isEven)

Example:
```js
const count = ref(0);
const isEven = computed(() => count.value % 2 === 0);



## Features of the App
✔ Increase/Decrease counter
✔ Reset counter
✔ Shows even/odd (computed)
✔ Fully styled with reusable components
✔ Logic extracted in composable
✔ Clean folder structure
✔ Professional coding patterns (industry level)

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
