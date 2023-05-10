import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const registerSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const Form = () => {
  const [pageType, setPageType] = useState('login');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = pageType === 'login';
  const isRegister = pageType === 'register';

  const handleSubmit = async (values) => {
    const endpoint = isLogin ? 'login' : 'register';
    try {
      const { data } = await axios.post(`http://localhost:9000/auth/${endpoint}`, values);
      const { user, token } = data;
      dispatch(setLogin({ user, token }));
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const loginValue = {
    email: '',
    password: '',
  };

  const registerValue = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  };

  return (
    <div>
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
      <Formik
        initialValues={isLogin ? loginValue : registerValue}
        validationSchema={isLogin ? loginSchema : registerSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            {isRegister && (
              <>
                <label htmlFor="firstName">First Name</label>
                <Field type="text" name="firstName" />
                <ErrorMessage name="firstName" />
                <label htmlFor="lastName">Last Name</label>
                <Field type="text" name="lastName" />
                <ErrorMessage name="lastName" />
                <label htmlFor="username">Username</label>
                <Field type="text" name="username" />
                <ErrorMessage name="username" />
              </>
            )}
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" />
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" />
            <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            <button type="button" onClick={() => setPageType(isLogin ? 'register' : 'login')}>
              {isLogin ? 'Create an account' : 'Already have an account? Login'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
