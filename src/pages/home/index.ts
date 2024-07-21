import React from 'react'
import { createRoute } from 'atomic-router'

const view = React.lazy(() => import('./View'))
const route = createRoute()

const Home = { view, route }

export { Home }
