import React from 'react'
import '../App.css'
import {Button,Form,FormGroup,Label,Input,} from "reactstrap";
import{FacebookLoginButton} from "react-social-login-buttons"
import{Link} from 'react-router-dom'


class Login extends React.Component {
  render() {
    return(
      <Form className="login-form bg-light" height="20px" width="30px">
        <h1>
          <span className='font-weight-bold'>MyTinerary</span>.com
        </h1>
        <h2 className='text-center'>Welcome</h2>
        <FormGroup>
          <Label>Email</Label>
          <Input type='email' placeholder='Email'/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type='password' placeholder='Password'/>
        </FormGroup>
        <Button className='btn-lg btn-dark bton-block'>
          Log in
        </Button>
        <div className='text-center pt-3'>
          Or continue  Facebook
        </div>
        <FacebookLoginButton className=" nav-link mt-3 mb-3" url="https://www.facebook.com/" />
        <div className='text-center'>
          <Link to='/signup'>Sign up</Link>
          <span className='p-2'>|</span>
          <a href='/forgot-password'>Forgot Password</a>
        </div>
      </Form>
    )
  }
}


export default Login