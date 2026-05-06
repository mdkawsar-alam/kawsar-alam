import { useState, useCallback } from 'react';
import { validateForm, getFieldError, hasErrors } from '@/lib/validation';

export function useValidation(schema) {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = useCallback((data) => {
    const validationErrors = validateForm(data, schema);
    setErrors(validationErrors);
    return validationErrors;
  }, [schema]);

  const validateField = useCallback((fieldPath, value, data) => {
    const fieldErrors = validateForm({ [fieldPath]: value }, { [fieldPath]: schema[fieldPath] });
    setErrors(prev => ({
      ...prev,
      [fieldPath]: fieldErrors[fieldPath] || null
    }));
  }, [schema]);

  const setFieldTouched = useCallback((fieldPath) => {
    setTouched(prev => ({
      ...prev,
      [fieldPath]: true
    }));
  }, []);

  const getFieldError = useCallback((fieldPath) => {
    return errors[fieldPath] || null;
  }, [errors]);

  const isFieldTouched = useCallback((fieldPath) => {
    return touched[fieldPath] || false;
  }, [touched]);

  const shouldShowError = useCallback((fieldPath) => {
    return isFieldTouched(fieldPath) && getFieldError(fieldPath);
  }, [isFieldTouched, getFieldError]);

  const clearErrors = useCallback(() => {
    setErrors({});
    setTouched({});
  }, []);

  const clearFieldError = useCallback((fieldPath) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[fieldPath];
      return newErrors;
    });
  }, []);

  const isValid = !hasErrors(errors);

  return {
    errors,
    touched,
    validate,
    validateField,
    setFieldTouched,
    getFieldError,
    isFieldTouched,
    shouldShowError,
    clearErrors,
    clearFieldError,
    isValid
  };
}
