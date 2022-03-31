import * as Yup from 'yup';

import i18n from 'i18next';

const checkPass =
  /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]/;

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email(i18n.t('errorEmail'))
    .required(i18n.t('errorRequired'))
    .max(40, i18n.t('errorStringLength'))
    .trim(),
  password: Yup.string()
    .matches(checkPass, i18n.t('errorMatchPass'))
    .trim()
    .min(6, i18n.t('errorStringLength'))
    .max(20, i18n.t('errorStringLength')),
});

export const signupSchema = Yup.object().shape({
  email: Yup.string()
    .email(i18n.t('errorEmail'))
    .required(i18n.t('errorRequired'))
    .max(40, i18n.t('errorStringLength'))
    .trim(),
  name: Yup.string()
    .required(i18n.t('errorRequired'))
    .trim()
    .max(30, i18n.t('errorStringLength')),
  password: Yup.string()
    .trim()
    .matches(checkPass, i18n.t('errorMatchPass'))
    .min(6, i18n.t('errorStringLength'))
    .max(20, i18n.t('errorStringLength')),
});

export const forgotSchema = Yup.object().shape({
  email: Yup.string()
    .email(i18n.t('errorEmail'))
    .required(i18n.t('errorRequired'))
    .max(40, i18n.t('errorStringLength'))
    .trim(),
  password: Yup.string()
    .matches(checkPass, i18n.t('errorMatchPass'))
    .trim()
    .min(6, i18n.t('errorStringLength'))
    .max(20, i18n.t('errorStringLength')),
  repeat: Yup.string().when('password', (password, schema) => {
    return schema.test({
      test: (repeat: string) => repeat === password,
      message: i18n.t('errorEqualPass'),
    });
  }),
});
