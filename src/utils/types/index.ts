export interface MenuItemTS {
  label: string;
  href?: string;
  items?: MenuItemTS[];
}

export interface MenuTS {
  title: string
  items: MenuItemTS[]
}