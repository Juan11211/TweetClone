import React, { useState } from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setLogin} from '../state/index'
import axios from 'axios'

const registerSchema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().email('invalid email').required('required'),
  password: yup.string().required('required'),
  username: yup.string().required('required'),
  //profilePicture: yup.string().required('required')
})

const loginSchema = yup.object().shape({
  email: yup.string().email('invalid email').required('required'),
  password: yup.string().required('required'),
})

const registerValue = yup.object().shape({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  username: "",
  //profilePicture: yup.string().required('required')
})

const loginValue = yup.object().shape({
  email: "",
  password: "",
})

const Form = () => {
  const [pageType, setPageType] = useState('login'); 
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const isLogin = pageType === 'login';
  const isRegister = pageType === 'register';

  const register = async(values, onSubmitProps) => {
    const formDa
  }


}
