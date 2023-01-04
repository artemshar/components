import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button style={{padding: '4px 20px', borderRadius: '4px', border: '1px solid #000'}}>{props.label}</button>;
};

export default Button;