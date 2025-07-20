import { z } from 'zod'

export const registrationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email(),
  age: z.coerce.number().int().min(5).max(18),
  parentContact: z.string().min(1, 'Parent contact required'),
  englishLevel: z.enum(['beginner', 'intermediate', 'advanced'])
})

export type RegistrationSchema = z.infer<typeof registrationSchema>
