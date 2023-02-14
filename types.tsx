import { Dispatch, ReactNode, SetStateAction } from "react";

export type Feedback = {
  name: string;
  email: string;
  rating: number;
  comment: string;
};

export type InputProps = {
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "email";
  value: string;
};

export type TextAreaProps = {
  label: string;
  placeholder: string;
  description: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
};

export type StarRatingProps = {
  label: string;
  name: string;
  setStarRating: Dispatch<SetStateAction<string>>;
};

export type ButtonProps = {
  disabled: boolean;
  label: string;
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

export type FormProps = {
  children: ReactNode;
  onSubmit: () => void;
  validateForm: () => void;
};

export enum Fields {
  NAME = "name",
  EMAIL = "email",
  STARRATING = "starRating",
  COMMENT = "comment",
}

export type FormErrorProps = {
  field: Fields;
  errorObject: Record<Fields, string>;
};
