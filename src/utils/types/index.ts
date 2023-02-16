export interface MenuItemTS {
  label: string;
  href?: string;
  items?: MenuItemTS[];
}

export interface ISignInForm {
  username: string;
  password: string;
}
