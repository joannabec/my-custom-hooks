// Obtiene el valor de un input
import { useState } from 'react';
// Debemos enviar un objeto con una propiedad que coincida con
// el name del elemento que llama al evento handleInputChange
const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const reset = () => {
    setValues(initialState);
  };
  // handleInputChange recibe el evento del elemento que lo ejecuta
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};

export default useForm;
