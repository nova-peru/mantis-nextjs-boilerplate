// assets
import { LoginOutlined, ProfileOutlined } from "@ant-design/icons";

// Local
import { MenuItem } from "./types";

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
};

const pages: MenuItem = {
  id: "authentication",
  title: "Authentication",
  type: "group",
  children: [
    {
      id: "login1",
      title: "Login",
      type: "item",
      url: "/login",
      icon: icons.LoginOutlined,
      target: true,
    },
    {
      id: "register1",
      title: "Register",
      type: "item",
      url: "/register",
      icon: icons.ProfileOutlined,
      target: true,
    },
  ],
};

export default pages;
