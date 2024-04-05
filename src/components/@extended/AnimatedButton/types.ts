import { PropsWithChildren } from "react";

export type Props = PropsWithChildren & {
  type?: "rotate" | "slide" | "scale";
};
