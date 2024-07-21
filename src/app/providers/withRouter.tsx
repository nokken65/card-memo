import React from 'react'
import { RouterProvider } from 'atomic-router-react'

type AtomicRouter = Parameters<typeof RouterProvider>['0']['router']

type WithRouterConfig = { router: AtomicRouter }

const withRouter =
  (config: WithRouterConfig) => (children: () => React.ReactNode) => () => {
    const { router } = config

    return <RouterProvider router={router}>{children()}</RouterProvider>
  }

export { withRouter }
export type { WithRouterConfig }
