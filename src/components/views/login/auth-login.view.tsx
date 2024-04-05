// MUI
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Local
import { AuthWrapper } from "./auth-wrapper";
import { LoginForm } from "./login-form";

export const AuthLoginView = () => {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            sx={{ mb: { xs: -0.5, sm: 0.5 } }}
          >
            <Typography variant="h3">Iniciar sesión</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <LoginForm />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};
