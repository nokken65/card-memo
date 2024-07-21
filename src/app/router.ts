import { createHistoryRouter, redirect } from 'atomic-router'
import { createBrowserHistory } from 'history'

import { Authorization } from '@/pages/authorization'
import { Home } from '@/pages/home'

const routes = [
  { path: '/', route: Home.route },
  { path: Authorization.path, route: Authorization.route }
]

const router = createHistoryRouter({
  routes
})

const history = createBrowserHistory()

redirect({
  clock: Home.route.opened,
  route: Authorization.route
})

router.setHistory(history)

export { router }
