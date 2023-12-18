import { useState, useCallback, useEffect } from 'react';

const useFormValidation = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const noErrors = Object.values(errors).every((error) => error === '');
    const allValuesPresent = Object.values(values).every((value) => value.trim() !== '');

    setIsValid(noErrors && allValuesPresent);
  }, [errors, values]);

  const validateUsername = useCallback(
    (value) => {
      const usernameRegex = /^[A-Za-z\s-]*$/;
      if (!usernameRegex.test(value)) {
        return 'Введите имя';
      } if (value.length < 3 || value.length > 30) {
        return 'Имя не должно быть длиннее 30 знаков и короче трех знаков';
      } return '';
    },
    [],
  );

  const validateEmail = useCallback(
    (value) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(value);
    },
    [],
  );

  const validatePassword = useCallback(
    (value) => {
      if (value.length < 2 || value.length > 20) {
        return 'Пароль не должен быть короче двух символов и длиннее 20 символов';
      } return '';
    },
    [],
  );

  const handleChange = useCallback((evt) => {
    const { name, value } = evt.target;

    let validationError = '';
    if (!value) {
      validationError = 'Это обязательное поле';
    } else if (name === 'name') {
      validationError = validateUsername(value);
    } else if (name === 'email') {
      validationError = validateEmail(value)
        ? ''
        : 'Введите адрес почты';
    } else if (name === 'password') {
      validationError = validatePassword(value);
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationError });
  }, [validateUsername, validateEmail, validatePassword, values, errors]);

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [],
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  };
};

export default useFormValidation;
