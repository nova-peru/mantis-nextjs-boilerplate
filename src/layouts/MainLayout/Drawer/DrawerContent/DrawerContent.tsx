// Local
import { Navigation } from "./Navigation";
import SimpleBarScroll from "./SimpleBar";

const DrawerContent = () => (
  <SimpleBarScroll
    sx={{
      "& .simplebar-content": {
        display: "flex",
        flexDirection: "column",
      },
    }}
  >
    <Navigation />
  </SimpleBarScroll>
);

export default DrawerContent;
