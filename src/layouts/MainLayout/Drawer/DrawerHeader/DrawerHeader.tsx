import PropTypes from "prop-types";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Stack, Chip } from "@mui/material";

// project import
import { DrawerHeaderStyled } from "./DrawerHeaderStyled";
import { LogoSection } from "@/components/shared/Logo";

// ==============================|| DRAWER HEADER ||============================== //

type Props = {
  open: boolean;
};

const DrawerHeader = ({ open }: Props) => {
  const theme = useTheme();

  return (
    // only available in paid version
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={1} alignItems="center">
        <LogoSection />
        <Chip
          label={"1.0"}
          size="small"
          sx={{
            height: 16,
            "& .MuiChip-label": { fontSize: "0.625rem", py: 0.25 },
          }}
          component="a"
          href="https://github.com/codedthemes/mantis-free-react-admin-template"
          target="_blank"
          clickable
        />
      </Stack>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool,
};

export default DrawerHeader;
