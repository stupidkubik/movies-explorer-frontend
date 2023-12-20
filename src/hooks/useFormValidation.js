import { useState, useCallback } from 'react';

const useFormValidation = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validateUsername = useCallback(
    (value) => {
      const usernameRegex = /^[A-Za-zА-Яа-яЁё\\-\\s]+$/;
      if (!usernameRegex.test(value)) {
        return 'Введите имя';
      } if (value.length < 3 || value.length > 30) {
        return 'Имя не должно быть короче 3 букв';
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
        return 'Пароль не должен быть короче двух символов';
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
    setIsValid(evt.target.closest('form').checkValidity());
  }, [validateUsername, validateEmail, validatePassword, values, errors]);

  const resetForm = useCallback(
    (isValidForm = false, valuesForm = {}, errorsForm = {}) => {
      setIsValid(isValidForm);
      setValues(valuesForm);
      setErrors(errorsForm);
    },
    [setIsValid, setValues, setErrors],
  );

  return {
    values,
    errors,
    handleChange,
    isValid,
    resetForm,
  };
};

export default useFormValidation;
