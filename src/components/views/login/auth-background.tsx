import Image from "next/image";

// MUI
import { Box } from "@mui/material";

// Local
import bgimagee from "./bg.avif";

export const AuthBackground = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        filter: "blur(18px)",
        zIndex: -1,
        bottom: 0,
      }}
    >
      <Image
        src={bgimagee}
        alt="background"
        quality={1}
        style={{ objectFit: "contain", width: "100%", height: "100%" }}
      />
    </Box>
  );
};
