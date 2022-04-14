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

export interface ITasks {
  title: string;
  id?: number;
  description: string;
  expireDate: string;
  status: string;
  performersId: number[];
  comment: string;
  index: number;
}

export type ITasksPreview = Pick<
  ITasks,
  'title' | 'description' | 'expireDate' | 'comment'
>;

export interface IDeck {
  title: string;
  id: number;
  items: ITasks[];
}
