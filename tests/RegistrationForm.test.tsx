import { render, screen } from '@testing-library/react'
import { RegistrationForm } from '@/components/common/RegistrationForm'

describe('RegistrationForm', () => {
  it('renders form fields', () => {
    render(<RegistrationForm />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })
})
