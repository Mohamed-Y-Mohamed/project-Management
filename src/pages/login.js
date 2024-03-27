import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdb-react-ui-kit';
import "./style/login.css";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in');
      navigate('/Kanban'); // Redirect the user to the dashboard or home page

      // Navigate to your dashboard or home page here
      // navigate('/dashboard'); // Uncomment and use if you have react-router setup
    } catch (error) {
      setError(error.message);
      console.error('Error signing in with password and email', error.message);
    }
  };

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden' style={{ marginTop: "4%" }}>

      {/* Other components remain unchanged */}

      <MDBCol md='6' className='position-relative'>
        <MDBCard className='my-5 bg-glass'>
          <MDBCardBody className='p-5'>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={handleSubmit}>
              <MDBInput
                wrapperClass='mb-4'
                label='Email'
                id='email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
              />
              <MDBInput
                wrapperClass='mb-4'
                label='Password'
                id='password'
                name='password'
                type='password'
                value={formData.password}
                onChange={handleChange}
              />

<MDBBtn className='w-100 mb-4' size='md'  style={{ width: '100%',height:"40px" }}>Login</MDBBtn>
            </form>

            <div className="text-center">
              <p>or sign up with:</p>
              <a href="/Signup" className="btn btn-secondary w-100 mb-4">Sign up</a>
            </div>

          </MDBCardBody>
        </MDBCard>
      </MDBCol>

    </MDBContainer>
  );
}

export default Login;
