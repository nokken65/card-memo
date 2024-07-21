import { Button, Fieldset, rem, TextInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { IconAt } from '@tabler/icons-react'

import { RegisterValues } from '../model/types'
import { registerSchema } from '../model/validation'

const RegisterForm = () => {
  const form = useForm<RegisterValues>({
    mode: 'controlled',
    validateInputOnChange: false,
    validateInputOnBlur: true,
    initialValues: { email: '', name: '' },
    validate: zodResolver(registerSchema)
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
        <TextInput
          label="Name"
          {...form.getInputProps('name')}
        />
        <Button
          type="submit"
          mt={18}
        >
          Register
        </Button>
      </Fieldset>
    </form>
  )
}

export { RegisterForm }
