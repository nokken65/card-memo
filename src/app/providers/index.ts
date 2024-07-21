import { compose } from 'ramda'

import { withMantine } from './withMantine'
import { withRouter, WithRouterConfig } from './withRouter'

type WithProvidersConfig = { routerConfig: WithRouterConfig }

const withProviders = (config: WithProvidersConfig) =>
  compose(withRouter(config.routerConfig), withMantine)

export { withProviders }
