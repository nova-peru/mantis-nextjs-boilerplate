// Assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

// Local
import { MenuItem } from "./types";

// Icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
};

const utilities: MenuItem = {
  id: "utilities",
  title: "Utilities",
  type: "group",
  children: [
    {
      id: "util-typography",
      title: "Typography",
      type: "item",
      url: "/typography",
      icon: icons.FontSizeOutlined,
    },
    {
      id: "util-color",
      title: "Color",
      type: "item",
      url: "/color",
      icon: icons.BgColorsOutlined,
    },
    {
      id: "util-shadow",
      title: "Shadow",
      type: "item",
      url: "/shadow",
      icon: icons.BarcodeOutlined,
    },
    {
      id: "ant-icons",
      title: "Ant Icons",
      type: "item",
      url: "/icons/ant",
      icon: icons.AntDesignOutlined,
      breadcrumbs: false,
    },
  ],
};

export default utilities;
