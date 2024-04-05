// material-ui
import { Theme, styled } from "@mui/material/styles";
import { Box } from "@mui/material";

// ==============================|| DRAWER HEADER - STYLED ||============================== //

type AppBarStyledProps = {
  theme: Theme;
  open: boolean;
};

export const DrawerHeaderStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }: AppBarStyledProps) => ({
  ...theme.mixins.toolbar,
  display: "flex",
  alignItems: "center",
  justifyContent: open ? "flex-start" : "center",
  paddingLeft: theme.spacing(open ? 3 : 0),
}));
