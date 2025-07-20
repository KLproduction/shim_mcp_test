'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registrationSchema, type RegistrationSchema } from '@/types/registration'

export type RegistrationValues = RegistrationSchema

export function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationValues>({
    resolver: zodResolver(registrationSchema)
  })

  function onSubmit(values: RegistrationValues) {
    console.log(values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div>
        <label htmlFor='name' className='block'>Name</label>
        <input id='name' {...register('name')} className='w-full border p-2' />
        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor='email' className='block'>Email</label>
        <input id='email' type='email' {...register('email')} className='w-full border p-2' />
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor='age' className='block'>Age</label>
        <input id='age' type='number' {...register('age')} className='w-full border p-2' />
        {errors.age && <p className='text-red-500'>{errors.age.message}</p>}
      </div>
      <div>
        <label htmlFor='parentContact' className='block'>Parent Contact</label>
        <input id='parentContact' {...register('parentContact')} className='w-full border p-2' />
        {errors.parentContact && <p className='text-red-500'>{errors.parentContact.message}</p>}
      </div>
      <div>
        <label htmlFor='englishLevel' className='block'>English Level</label>
        <select id='englishLevel' {...register('englishLevel')} className='w-full border p-2'>
          <option value='beginner'>Beginner</option>
          <option value='intermediate'>Intermediate</option>
          <option value='advanced'>Advanced</option>
        </select>
      </div>
      <button type='submit' className='bg-blue-600 text-white px-4 py-2'>
        Register
      </button>
    </form>
  )
}
