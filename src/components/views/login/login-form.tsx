"use client";

import { useState } from "react";

// MUI
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import EyeOutlined from "@ant-design/icons/EyeOutlined";
import EyeInvisibleOutlined from "@ant-design/icons/EyeInvisibleOutlined";

// Local
import { AnimateButton } from "@/components/@extended";

export function LoginForm() {
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <form noValidate onSubmit={() => {}}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="email-login">Correo electrónico</InputLabel>
            <OutlinedInput
              id="email-login"
              type="email"
              name="email"
              placeholder="Ingrese correo electrónico"
              fullWidth
              error={false}
            />
            {/* {touched.email && errors.email && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {errors.email}
                    </FormHelperText>
                  )} */}
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="password-login">Contraseña</InputLabel>
            <OutlinedInput
              fullWidth
              error={false}
              id="-password-login"
              type={showPassword ? "text" : "password"}
              value="123"
              name="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    size="large"
                  >
                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                  </IconButton>
                </InputAdornment>
              }
              placeholder="Enter password"
            />
            {/* {touched.password && errors.password && (
                    <FormHelperText error id="standard-weight-helper-text-password-login">
                      {errors.password}
                    </FormHelperText>
                  )} */}
          </Stack>
        </Grid>

        <Grid item xs={12} sx={{ mt: -1 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={(event) => setChecked(event.target.checked)}
                  name="checked"
                  color="primary"
                  size="small"
                />
              }
              label={<Typography variant="h6">Recordarme</Typography>}
            />
            <Link variant="h6" color="text.primary">
              Olvidé mi contraseña
            </Link>
          </Stack>
        </Grid>
        {/* {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )} */}
        <Grid item xs={12}>
          <AnimateButton>
            <Button
              disableElevation
              disabled={false}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="primary"
            >
              Ingresar
            </Button>
          </AnimateButton>
        </Grid>
      </Grid>
    </form>
  );
}
