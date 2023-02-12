import { ReactNode } from "react";

export type Feedback = {
  name: string;
  email: string;
  rating: number;
  comment: string;
};

export type InputProps = {
  label: string;
};

export type TextAreaProps = {
  label: string;
  placeholder: string;
  description: string;
};

export type StarRatingProps = {
  label: string;
  name: string;
};

export type ButtonProps = {
  label: string;
  onClick: () => void;
};

export type NavBarProps = {
  title: string;
  withLeftButton: boolean;
  withRightButton: boolean;
};

export type FooterProps = {
  onClick: () => void;
  withButton: boolean;
};

export type LayoutProps = {
  children: ReactNode;
};
