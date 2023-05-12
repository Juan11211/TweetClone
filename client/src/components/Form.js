import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { setLogin } from '../state';

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

const AuthForm = ({ values }) => {
  const [pageType, setPageType] = useState('login');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = pageType === 'login';
  const isRegister = pageType === 'register';
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (values) => {
    const endpoint = isLogin ? 'login' : 'register';
    try {
      const { data } = await axios.post(`http://localhost:9000/auth/${endpoint}`, values);
      const { user, token } = data;
      dispatch(setLogin({ user, token }));
      navigate('/home');
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response.data.msg)
    }
  };

  const loginValue = {
    email: '',
    password: '',
    username: "",
  };

  const registerValue = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  };

  return (
    <div className='w-full lg:w-1/2 py-16 px-12'>
      <h1 className='text-4xl dark:text-white font-bold text-center'>{isLogin ? 'Login' : 'Register'}</h1>
      <Formik
        initialValues={isLogin ? loginValue : registerValue}
        validationSchema={isLogin ? loginSchema : registerSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form >
            <div>
              <div className='flex flex-col text-gray-400 py-2'>
                {isRegister && (
                  <>
                    <label className='flex flex-col text-gray-400 py-2' htmlFor="firstName">First Name</label>
                    <Field value={values?.firstName} className='rounded-lg bg-white-700 mt-2 p-2 focus:border-white-500 focus:bg-gray-500 focus:outline-none' type="text" name="firstName" />
                    <ErrorMessage name="firstName" />
                    <label className='flex flex-col text-gray-400 py-2' htmlFor="lastName">Last Name</label>
                    <Field value={values?.lastName} className='rounded-lg bg-white-700 mt-2 p-2 focus:border-white-500 focus:bg-gray-500 focus:outline-none' type="text" name="lastName" />
                    <ErrorMessage name="lastName" />
                  </>
                )}
              </div>
              <div className='flex flex-col text-gray-400 py-2'>                
                <label className='flex flex-col text-gray-400 py-2' htmlFor="username">Username</label>
                  <Field  value={values?.username} className='rounded-lg bg-white-700 mt-2 p-2 focus:border-white-500 focus:bg-gray-500 focus:outline-none' type="text" name="username" />
                  <ErrorMessage name="username" />
                <label className='flex flex-col text-gray-400 py-2' htmlFor="email">Email</label>
                  <Field value={values?.email} className='rounded-lg bg-white-700 mt-2 p-2 focus:border-white-500 focus:bg-gray-500 focus:outline-none' type="email" name="email" />
                <ErrorMessage name="email" />
                <label className='flex flex-col text-gray-400 py-2' htmlFor="password">Password</label>
                <Field value={values?.password} className='rounded-lg bg-white-700 mt-2 p-2 focus:border-white-500 focus:bg-gray-500 focus:outline-none' type="password" name="password" />
                <ErrorMessage name="password" />
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' type="submit">{isLogin ? 'Login' : 'Register'}</button>
                <button className='text-1xl dark:text-white font-bold text-center' type="button" onClick={() => setPageType(isLogin ? 'register' : 'login')}>
                  {isLogin ? 'Create an account' : 'Already have an account?'}
                </button>
              </div>
              {errorMessage && <div className="text-red-500">{errorMessage}</div>}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
  
};

export default AuthForm;
