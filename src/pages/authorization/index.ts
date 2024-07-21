import React from 'react'
import { createRoute } from 'atomic-router'

const view = React.lazy(() => import('./View'))
const route = createRoute()
const path = '/authorize'

const Authorization = {
  view,
  route,
  path
}

export { Authorization }
