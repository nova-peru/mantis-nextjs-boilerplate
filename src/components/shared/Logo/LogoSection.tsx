import PropTypes from "prop-types";

// material-ui
import { ButtonBase, Link } from "@mui/material";

// project import
import { LogoIcon } from "./LogoIcon";

// ==============================|| MAIN LOGO ||============================== //

export const LogoSection = ({ sx, to }: any) => {
  return (
    <ButtonBase
      disableRipple
      component={Link}
      onClick={() => console.log("jejeje")}
      sx={sx}
    >
      <LogoIcon />
    </ButtonBase>
  );
};

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string,
};
