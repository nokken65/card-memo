import z from 'zod'

import { loginSchema, registerSchema } from './validation'

type RegisterValues = z.infer<typeof registerSchema>
type LoginValues = z.infer<typeof loginSchema>

export type { LoginValues, RegisterValues }
