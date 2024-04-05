// material-ui
import { Theme, styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

// project import
import { drawerWidth } from "@/config/theme";

// ==============================|| HEADER - APP BAR STYLED ||============================== //

type AppBarStyledProps = {
  theme: Theme;
  open: boolean;
};

const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }: AppBarStyledProps) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default AppBarStyled;
