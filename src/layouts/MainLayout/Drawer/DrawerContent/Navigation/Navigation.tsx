// material-ui
import { Box, Typography } from "@mui/material";

// project import
import NavGroup from "./NavGroup";
import { menuItems } from "../../../menu-items";

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

export const Navigation = () => {
  const navGroups = menuItems.items.map((item) => {
    switch (item.type) {
      case "group":
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        );
    }
  });

  return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
};
