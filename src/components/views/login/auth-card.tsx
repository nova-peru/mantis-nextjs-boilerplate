import { MainCard } from "@/components";
import { Box } from "@mui/material";

export const AuthCard = ({ children, ...other }: any) => (
  <MainCard
    sx={{
      maxWidth: { xs: 400, lg: 475 },
      margin: { xs: 2.5, md: 3 },
      "& > *": {
        flexGrow: 1,
        flexBasis: "50%",
      },
    }}
    content={false}
    {...other}
    border={false}
    boxShadow
    codeHighlight
  >
    <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
  </MainCard>
);
