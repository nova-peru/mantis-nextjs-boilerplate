import { PropsWithChildren } from "react";

export type Props = PropsWithChildren & {
  type: "grow" | "fade" | "collapse" | "slide" | "zoom";
  position?:
    | "top-left"
    | "top-right"
    | "top"
    | "bottom-left"
    | "bottom-right"
    | "bottom";
};
