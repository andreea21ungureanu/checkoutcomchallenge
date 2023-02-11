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
