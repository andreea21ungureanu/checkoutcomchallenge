import { NavBarProps } from "@/types";
import { navBar, root, helperLeft, helperRight } from "./styles";

export default function NavBar({ title, leftChild, rightChild }: NavBarProps) {
  return (
    <div className={root}>
      <div className={helperLeft}>{leftChild}</div>
      <h1 className={navBar}>{title}</h1>
      <div className={helperRight}>{rightChild}</div>
    </div>
  );
}
