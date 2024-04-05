// MUI
import Grid from "@mui/material/Grid";

// Local
import { LogoIcon } from "@/components";
import { AuthCard } from "./auth-card";
import { AuthFooter } from "./auth-footer";
import { AuthBackground } from "./auth-background";

export const AuthWrapper = ({ children }: any) => (
  <>
    <AuthBackground />
    <Grid container direction="column" justifyContent="flex-end">
      <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
        <LogoIcon />
      </Grid>
      <Grid item xs={12}>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight: { xs: "calc(100vh - 134px)", md: "calc(100vh - 112px)" },
          }}
        >
          <Grid item>
            <AuthCard>{children}</AuthCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ m: 0, mt: 1 }}>
        <AuthFooter />
      </Grid>
    </Grid>
  </>
);
