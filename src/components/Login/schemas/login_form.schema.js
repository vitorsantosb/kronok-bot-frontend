import * as Yup from 'yup';

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Email é invalido').required('Email é necessário'),
  password: Yup.string().required('Senha é necessária!'),
});

export default loginValidationSchema;