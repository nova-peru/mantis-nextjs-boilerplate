// MUI
import { Box, IconButton, Link, Theme, useMediaQuery } from "@mui/material";
import { GithubOutlined } from "@ant-design/icons";

// Local
import Search from "./Search";
import Notification from "./Notification";
import MobileSection from "./MobileSection";
import { Profile } from "./Profile";

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <>
      {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: "100%", ml: 1 }} />}

      <Notification />

      {!matchesXs ? <Profile /> : null}
      {matchesXs ? <MobileSection /> : null}
    </>
  );
};

export default HeaderContent;
