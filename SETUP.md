# Vite, Vue, PWA, GitHub Pages, Tailwind, DaisyUI setup

https://tailwindcss.com/docs/guides/vite#vue
https://daisyui.com/docs/install/
https://vite-pwa-org.netlify.app/guide/#installing-vite-plugin-pwa
https://vitejs.dev/guide/static-deploy#github-pages

npm create vite@latest buckets-coop-vue -- --template vue
cd .\buckets-coop-vue\
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i -D daisyui@latest
npm install -D vite-plugin-pwa

Configure tailwind.config.js and style.css.
Set the correct base in vite.config.js, and add VitePWA to vite.config.js.
Create GitHub Pages deployment yml.
