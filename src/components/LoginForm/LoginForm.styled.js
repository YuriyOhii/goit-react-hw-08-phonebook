import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const Title = styled.h1`
  text-align: center;
`;

export const Box = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0 auto;

  width: 320px;
  padding: 10px;

  border: 1px solid grey;
  border-radius: 2px;
`;

export const Input = styled(Field)`
  font-size: 16px;
  font-weight: 500;

  color: grey;
`;

export const ErrCaption = styled(ErrorMessage)`
  font-size: 12px;
  font-weight: 400;

  color: red;
`;
