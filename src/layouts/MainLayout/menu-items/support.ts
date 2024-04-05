// assets
import { ChromeOutlined, QuestionOutlined } from "@ant-design/icons";

// Local
import { MenuItem } from "./types";

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
};

const support: MenuItem = {
  id: "support",
  title: "Support",
  type: "group",
  children: [
    {
      id: "sample-page",
      title: "Sample Page",
      type: "item",
      url: "/sample-page",
      icon: icons.ChromeOutlined,
    },
    {
      id: "documentation",
      title: "Documentation",
      type: "item",
      url: "https://codedthemes.gitbook.io/mantis/",
      icon: icons.QuestionOutlined,
      external: true,
      target: true,
    },
  ],
};

export default support;
