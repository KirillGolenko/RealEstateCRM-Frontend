import * as Yup from 'yup';

const passRegExp = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]$/;

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required().max(40).trim(),
  password: Yup.string().matches(passRegExp).trim().min(6),
});

export const signupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required().max(40).trim(),
  name: Yup.string().required().trim().max(30),
  password: Yup.string().matches(passRegExp).trim().min(6),
});

export const forgotSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required().max(40).trim(),
  password: Yup.string()
    .matches(passRegExp, 'password should contain symbols and capital letters')
    .trim()
    .min(6),
  repeat: Yup.string().when('password', (password, schema) => {
    return schema.test({
      test: (repeat: string) => repeat === password,
      message: 'Passwords must be equal',
    });
  }),
});
