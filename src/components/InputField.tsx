import type { FieldError, UseFormRegister } from 'react-hook-form'

type InputProps = {
  register: UseFormRegister<any>
  formName: string
  placeholder: string
  error?: FieldError
  label: string
}

export function Input ({
  register,
  formName,
  placeholder,
  error,
  label
}: InputProps) {
  return (
    <div className='relative w-full my-4'>
      <label
        htmlFor={formName}
        className='absolute left-3 top-1 text-xs text-white font-bold px-1 z-10'
      >
        {label} <span className='text-red-400'>*</span>
      </label>

      <input
        id={formName}
        type='text'
        className='w-full px-4 pt-6 pb-2 text-sm border border-white rounded-xl bg-transparent text-white placeholder:text-gray-300'
        {...register(formName, { required: true })}
        placeholder={placeholder}
      />

      {error && (
        <p className='text-red-400 text-sm mt-1'>This field is required</p>
      )}
    </div>
  )
}
