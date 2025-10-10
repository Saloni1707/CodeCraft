'use client'

import { useState } from 'react'
import './password.css'

interface PasswordInputProps {
  id?: string
  label?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
  className?: string
}

export default function PasswordInput({
  id = 'password',
  label = 'Password',
  value,
  onChange,
  placeholder = 'Enter your password',
  required = false,
  className = ''
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}

      <div className="password-wrapper">
        <input
          id={id}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
        />

        <button
          type="button"
          className="toggle-password"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M17.94 17.94A10.12 10.12 0 0 1 12 20c-7 0-11-8-11-8a18.64 18.64 0 0 1 5.06-6.94" />
              <path d="M1 1l22 22" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

