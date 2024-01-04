import * as yup from 'yup';

async function validateDataForm(user) {
  let schemaLogin = yup.object().shape({
    email: yup
      .string()
      .email('O email digitado é inválido')
      .required('O campo email é obrigatório'),
    password: yup.string().required('O campo de senha é obrigatório'),
  });

  let schemaRegistration = yup.object().shape({
    name: yup.string().required('O campo de nome é obrigatório'),
    email: yup
      .string()
      .email('O email digitado é inválido')
      .required('O campo email é obrigatório'),
    password: yup.string().required('O campo de senha é obrigatório'),
  });

  try {
    if (user.name === '') await schemaRegistration.validate(user);
    if (!user.name) await schemaLogin.validate(user);

    return { valid: true, path: '', message: 'Validação foi um sucesso!' };
  } catch (erro) {
    return { valid: false, path: erro.path, message: erro.errors };
  }
}
export { validateDataForm };
