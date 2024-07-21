import { Button, Fieldset, rem, TextInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { IconAt } from '@tabler/icons-react'

import { LoginValues } from '../model/types'
import { loginSchema } from '../model/validation'

const LoginForm = () => {
  const form = useForm<LoginValues>({
    mode: 'controlled',
    validateInputOnChange: false,
    validateInputOnBlur: true,
    initialValues: { email: '' },
    validate: zodResolver(loginSchema)
  })

  const handleSubmit = form.onSubmit((values) => console.log(values))

  const icon = <IconAt style={{ width: rem(24), height: rem(24) }} />

  return (
    <form onSubmit={handleSubmit}>
      <Fieldset
        variant="filled"
        styles={{
          root: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }
        }}
      >
        <TextInput
          label="Email"
          type="email"
          rightSectionPointerEvents="none"
          rightSection={icon}
          {...form.getInputProps('email')}
        />
        <Button
          type="submit"
          mt={18}
        >
          Login
        </Button>
      </Fieldset>
    </form>
  )
}

export { LoginForm }
