import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
} from 'mdb-react-ui-kit';
import { auth,firestore } from '../components/firebase-config'; // Import the Firebase app instance
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./style/login.css"

function Signup() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        subscribe: false
      });
    
      const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === 'checkbox' ? checked : value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );
    
          // Signed up successfully
          console.log('User signed up:', userCredential.user);
    
          // Save user data to Firestore
          await setDoc(doc(firestore, "users", userCredential.user.uid), {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            // Add other fields as needed
          });
    
          // Here you can redirect the user to another page or perform any other actions
        } catch (error) {
          console.log('Error signing up:', error.message);
        }
      };
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden' style={{ marginTop: "4%" }}>

      <MDBRow>
        <MDBCol md='6' className='position-relative'>
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>
              <form onSubmit={handleSubmit}>
                <MDBRow>
                  <MDBCol col='6'>
                    <MDBInput
                      wrapperClass='mb-4'
                      label='First name'
                      id='firstName'
                      name='firstName'
                      type='text'
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </MDBCol>

                  <MDBCol col='6'>
                    <MDBInput
                      wrapperClass='mb-4'
                      label='Last name'
                      id='lastName'
                      name='lastName'
                      type='text'
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </MDBCol>
                </MDBRow>

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

                <div className='d-flex justify-content-center mb-4'>
                  <MDBCheckbox
                    name='subscribe'
                    id='subscribe'
                    label='Subscribe to our newsletter'
                    checked={formData.subscribe}
                    onChange={handleChange}
                  />
                </div>

                <MDBBtn className='w-100 mb-4' size='md' type='submit' style={{ width: '100%',height:"40px" }}>Sign up</MDBBtn>
             </form>

              <div className="text-center">
                <p>or sign up with:</p>
                <a href="/login" className="btn btn-secondary w-100 mb-4">Sign in</a>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
            The best offer <br />
            <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your business</span>
          </h1>
          <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Signup;
