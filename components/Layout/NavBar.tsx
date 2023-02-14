import { NavBarProps } from "@/types";
import BackButton from "../Buttons/BackButton";
import styles from "./Layout.module.css";
import {
  navBarStyle,
  rootStyle,
  helperStyleLeft,
  helperStyleRight,
} from "./styles";
import FilterButton from "../Buttons/FilterButton";

// TODO: Make nav text bigger in small screen mode
export default function NavBar({ title, leftChild, rightChild }: NavBarProps) {
  return (
    <div className={rootStyle}>
      <div className={helperStyleLeft}>{leftChild}</div>

      <h1 className={navBarStyle}>{title}</h1>
      <div className={helperStyleRight}>{rightChild}</div>
    </div>
  );
}
