import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type MenuType = "group" | "item";

type MenuBase<T extends MenuType> = {
  id: string;
  title: string;
  type: T;
};

type MenuItemType = MenuBase<"item"> & {
  url?: string;
  icon?: ForwardRefExoticComponent<
    Omit<AntdIconProps, "ref"> & RefAttributes<HTMLSpanElement>
  >;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
};

type MenuGroupType = MenuBase<"group"> & {
  children: MenuItemType[];
};

export type MenuItem = MenuGroupType | MenuItemType;
