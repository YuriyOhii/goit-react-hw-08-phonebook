import { Button } from 'components/Button/Button';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { Box, ErrCaption, Input, Title } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/operations';

const initForm = {
  email: '',
  password: '',
};

const labelId = {
  email: nanoid(),
  password: nanoid(),
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(loginUser(values));
    resetForm();
  };
  return (
    <div>
      <Title style={{ textAlign: 'center' }}>Please, log in!</Title>
      <Formik initialValues={initForm} onSubmit={handleSubmit}>
        <Box>
          <label htmlFor={labelId.email}>Email</label>
          <Input id={labelId.email} type="email" name="email" />
          <ErrCaption name="email" component={'div'} />
          <label htmlFor={labelId.password}>Password</label>
          <Input id={labelId.password} type="text" name="password" />
          <ErrCaption name="password" component={'div'} />

          <Button type="submit">Log in</Button>
        </Box>
      </Formik>
    </div>
  );
};
