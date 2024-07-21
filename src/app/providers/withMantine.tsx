import { MantineProvider } from '@mantine/core'

import { theme } from '@/shared/theme'

const withMantine = (children: () => React.ReactNode) => () => {
  return (
    <MantineProvider
      defaultColorScheme="auto"
      theme={theme}
    >
      {children()}
    </MantineProvider>
  )
}

export { withMantine }
