import { PropsWithChildren, forwardRef } from "react";

// MUI
import { Fade, Box, Grow } from "@mui/material";

// Local
import { Props } from "./types";

// eslint-disable-next-line react/display-name
export const Transitions = forwardRef(
  (
    { children, position = "top-left", type = "grow", ...others }: Props,
    ref
  ) => {
    let positionSX = {
      transformOrigin: "0 0 0",
    };

    switch (position) {
      case "top-right":
      case "top":
      case "bottom-left":
      case "bottom-right":
      case "bottom":
      case "top-left":
      default:
        positionSX = {
          transformOrigin: "0 0 0",
        };
        break;
    }

    return (
      <Box ref={ref}>
        {type === "grow" && (
          <Grow {...others}>
            <Box sx={positionSX}>{children}</Box>
          </Grow>
        )}
        {type === "fade" && (
          <Fade
            {...others}
            timeout={{
              appear: 0,
              enter: 300,
              exit: 150,
            }}
          >
            <Box sx={positionSX}>{children}</Box>
          </Fade>
        )}
      </Box>
    );
  }
);
