"use client";

// MUI
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export const AuthFooter = () => {
  const matchDownSM = useMediaQuery((theme: any) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Container maxWidth="xl">
      <Stack
        direction={matchDownSM ? "column" : "row"}
        justifyContent={matchDownSM ? "center" : "space-between"}
        spacing={2}
        textAlign={matchDownSM ? "center" : "inherit"}
      >
        <Typography variant="subtitle2" color="secondary" component="span">
          &copy; Mantis Next.js - Mantis&nbsp;
          <Typography
            component={Link}
            variant="subtitle2"
            href="https://mantisdashboard.io/"
            target="_blank"
            underline="hover"
          >
            Mantis Dashboard
          </Typography>
        </Typography>

        <Stack
          direction={matchDownSM ? "column" : "row"}
          spacing={matchDownSM ? 1 : 3}
          textAlign={matchDownSM ? "center" : "inherit"}
        >
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="#"
            target="_blank"
            underline="hover"
          >
            FAQ
          </Typography>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="#"
            target="_blank"
            underline="hover"
          >
            Políticas de Privacidad
          </Typography>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="#"
            target="_blank"
            underline="hover"
          >
            Ayuda
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};
