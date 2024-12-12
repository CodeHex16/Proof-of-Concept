/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

// Add a Login Guard
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !localStorage.getItem('token')) {

    if(to.path.startsWith('/admin')) {
      next('/admin/login')
    }
    else{
      next('/login')
    }

  } else {
    //TODO: Add a check for the token expiry, and admin level
    next()
  }
})

// Update the title, and description of page SEO
router.afterEach((to) => {
  // get the app name from the package.json
  const appName: string = 'CodeHex16'
  document.title = typeof to.meta.title === 'string' ? to.meta.title + ' | ' + appName : 'Vite App'
  document.querySelector('meta[name="description"]')?.setAttribute('content', typeof to.meta.description === 'string' ? to.meta.description : appName)
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
