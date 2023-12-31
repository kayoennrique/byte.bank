import { ModalContext } from 'common/context/ModalContext';
import { useContext } from 'react';

export const useModalContext = () => {
  const { nome, setName, email, setEmail, senha, setPassword, erro, setErro } =
    useContext(ModalContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'nome':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'senha':
        setPassword(value);
        break;
      default:
        throw new Error('Campo de texto inválido');
    }
  };

  const onSubmitRegistration = async (
    e,
    api,
    whenClose,
    validateDataForm
  ) => {
    e.preventDefault();
    const user = {
      nome,
      email,
      senha,
    };

    const result = await validateDataForm(user);

    if (!result.valid) {
      setErro({
        path: result.path,
        message: result.message,
      });
      return;
    }

    api
      .post('/users/register', user)
      .then(() => {
        setErro({
          path: 'message-sucess',
          message: 'Usuário cadastrado com sucesso!',
        });
        setName('');
        setEmail('');
        setPassword('');
        setTimeout(() => {
          whenClose();
          setErro({
            path: '',
            message: '',
          });
        }, 1000);
      })
      .catch((erro) => {
        setErro({
          path: 'email',
          message: erro?.response?.data?.message,
        });
      });
  };

  const onSubmitLogin = async (
    e,
    api,
    whenClose,
    whenLogin,
    validateDataForm
  ) => {
    e.preventDefault();
    const user = {
      email,
      senha,
    };

    const result = await validateDataForm(user);
    if (!result.valid) {
      setErro({
        path: result.path,
        message: result.message,
      });
      return;
    }

    api
      .post('/users/login', user)
      .then((response) => {
        sessionStorage.setItem('token', response.data.access_token);
        localStorage.setItem('userId', response.data.user.id);
        localStorage.setItem('userName', response.data.user.nome);
        setEmail('');
        setPassword('');
        setErro({
          path: '',
          message: '',
        });
        whenLogin();
      })
      .catch((erro) => {
        if (erro?.response?.data?.message) {
          setErro({
            path: 'message-erro',
            message: erro.response.data.message,
          });
        } else {
          alert(
            'Aconteceu um erro inesperado ao efetuar login! Contate o suporte'
          );
          whenClose();
        }
      });
  };

  const onSubmitUpdateUser = async (
    e,
    navigate,
    api,
    validateDataForm,
    userId
  ) => {
    e.preventDefault();
    const user = {
      nome,
      email,
      senha,
    };

    const result = await validateDataForm(user);

    if (!result.valid) {
      setErro({
        path: result.path,
        message: result.message,
      });
      return;
    }

    api
      .put(`/users/${userId}`, user)
      .then(() => {
        localStorage.setItem('userName', nome);
        alert('Alterações salvas com sucesso!');
        setErro({
          path: 'message-sucess',
          message: 'Alterações salvas com sucesso!',
        });
        setName('');
        setEmail('');
        setPassword('');
        navigate('/home');
        setTimeout(() => {
          setErro({
            path: '',
            message: '',
          });
        }, 1000);
      })
      .catch((erro) => {
        setErro({
          path: 'email',
          message: erro?.response?.data?.message,
        });
      });
  };

  return {
    nome,
    setName,
    email,
    setEmail,
    senha,
    setPassword,
    erro,
    setErro,
    handleChange,
    onSubmitRegistration,
    onSubmitLogin,
    onSubmitUpdateUser,
  };
};
