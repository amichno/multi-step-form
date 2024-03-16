import React from 'react';

interface CustomButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled: boolean;
}

export default function CustomButton<CustomButtonsProps>({
  disabled,
  ...props
}) {
  return (
    <button {...props} disabled>
      Buttons
    </button>
  );
}
