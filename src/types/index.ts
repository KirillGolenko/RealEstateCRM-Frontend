export interface ILoginForm {
  email: string;
  password: string;
}

export interface ISignupForm extends ILoginForm {
  username: string;
}

export interface IForgotForm extends ILoginForm {
  repeat: string;
}
