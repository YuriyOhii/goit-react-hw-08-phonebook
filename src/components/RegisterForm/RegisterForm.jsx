import { Button } from 'components/Button/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Box, ErrCaption, Input, Title } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operations';

const initForm = {
  name: '',
  email: '',
  password: '',
};

const labelId = {
  name: nanoid(),
  email: nanoid(),
  password: nanoid(),
};

const schema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().required().email(),
  password: Yup.string()
    .min(7, 'You need to type atleast 7 characters')
    .required(),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(registerUser(values));
    resetForm();
  };
  return (
    <div>
      <Title>Please, register!</Title>
      <Formik
        initialValues={initForm}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Box>
          <label htmlFor={labelId.name}>Name</label>
          <Input id={labelId.name} type="text" name="name" />
          <ErrCaption name="name" component={'div'} />
          <label htmlFor={labelId.email}>Email</label>
          <Input id={labelId.email} type="email" name="email" />
          <ErrCaption name="email" component={'div'} />
          <label htmlFor={labelId.password}>Password</label>
          <Input id={labelId.password} type="text" name="password" />
          <ErrCaption name="password" component={'div'} />

          <Button type="submit">Register</Button>
        </Box>
      </Formik>
    </div>
  );
};
