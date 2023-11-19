import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const NewContact = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};

  width: 320px;
  padding: ${({ theme }) => theme.spacing(3)};

  border: 1px solid #212121;
  border-radius: 4px;
`;

export const Input = styled(Field)`
  font-size: 16px;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.grey};
`;

export const ErrCaption = styled(ErrorMessage)`
  font-size: 12px;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.red};
`;
