import React from 'react';

const FormInput = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  touched,
  required = false,
  placeholder = '',
  rows,
}) => {
  const sharedProps = {
    name,
    value,
    onChange,
    onBlur,
    required,
    placeholder,
    className: `w-full px-4 py-2 rounded-lg bg-[#09101A] border border-gray-600 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00eeff] transition-colors ${
      error && touched ? 'border-red-500' : ''
    }`,
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-gray-300 mb-2 font-medium">
        {label}{required ? ' *' : ''}
      </label>
      {type === 'textarea' ? (
        <textarea {...sharedProps} rows={rows || 4} />
      ) : (
        <input type={type} {...sharedProps} />
      )}
      {error && touched && (
        <span className="text-red-500 text-sm mt-1">{error}</span>
      )}
    </div>
  );
};

export default FormInput;
