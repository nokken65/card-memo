import { Button, createTheme, TextInput } from '@mantine/core'

const theme = createTheme({
  primaryColor: 'violet',
  defaultRadius: 'md',
  components: {
    Button: Button.extend({
      defaultProps: {
        size: 'lg',
        variant: 'filled'
      }
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        variant: 'default',
        size: 'lg'
      }
    })
  }
})

export { theme }
