import '@mantine/core/styles.css'

import { withProviders } from './providers'
import { router } from './router'
import { Routing } from './routing'

const _App = () => {
  return <Routing />
}

const App = withProviders({ routerConfig: { router } })(_App)

export { App }
