import { Btn } from './Button.styled';

export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <Btn selected={selected} type={type} {...otherProps}>
      {children}
    </Btn>
  );
};
