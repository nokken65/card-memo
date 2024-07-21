import { createRoutesView } from 'atomic-router-react'

import { Authorization } from '@/pages/authorization'
import { Home } from '@/pages/home'

const Routing = createRoutesView({
  routes: [
    { route: Home.route, view: Home.view },
    {
      route: Authorization.route,
      view: Authorization.view
    }
  ],
  otherwise() {
    return <div>Page not found!</div>
  }
})

export { Routing }
