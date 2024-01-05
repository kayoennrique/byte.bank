import * as yup from 'yup';

async function validateDataForm(user) {
  let schemaLogin = yup.object().shape({
    email: yup
      .string()
      .email('O email digitado é inválido')
      .required('O campo email é obrigatório'),
    senha: yup.string().required('O campo de senha é obrigatório'),
  });

  let schemaRegistration = yup.object().shape({
    nome: yup.string().required('O campo de nome é obrigatório'),
    email: yup
      .string()
      .email('O email digitado é inválido')
      .required('O campo email é obrigatório'),
    senha: yup.string().required('O campo de senha é obrigatório'),
  });

  try {
    if (user.nome === '') await schemaRegistration.validate(user);
    if (!user.nome) await schemaLogin.validate(user);

    return { valid: true, path: '', message: 'Validação foi um sucesso!' };
  } catch (erro) {
    return { valid: false, path: erro.path, message: erro.errors };
  }
}
export { validateDataForm };
