import z from 'zod'

const email = z.string().email()

const loginSchema = z.object({
  email
})

const registerSchema = z.object({
  email,
  name: z.string().min(4).max(20)
})

export { registerSchema, loginSchema }
