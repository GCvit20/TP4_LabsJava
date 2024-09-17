const validateTextField = (value) => {
  const regex = /^[a-zA-Z\s]*$/;
  return regex.test(value) ? null : 'Solo puede contener letras y espacios.';
};

const validatePhone = (value) => {
  const regex = /^[1-9][0-9]{9}$/;
  return regex.test(value) ? null : 'Debe contener exactamente 10 dígitos numéricos mayores a 0.';
};

const useValidations = (values) => {
  const errors = {};

  errors.name = validateTextField(values.name);
  errors.position = validateTextField(values.position);
  errors.departament = validateTextField(values.departament);
  errors.phone = validatePhone(values.phone);

  return Object.fromEntries(Object.entries(errors).filter(([_, v]) => v != null));
};

export default useValidations;
