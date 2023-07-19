import React from 'react'
import backgroundVideo from "../../asset/videos/BG.webm"
import { Form, Formik } from 'formik';
import emailjs from '@emailjs/browser';
import './contact.styles.scss'
import { InputField } from '../inputFielf/inputField.component';
import ValidationSchema from '../validation/validationSchema'
export default function Contact() {

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    sendEmail(values);
    resetForm({ values: '' });
  };
  ;

  const sendEmail = async (values) => {
    try {
      await emailjs.send(
        'service_r5p4nul',
        'template_fvtgv1k',
        values,
        'x6v3eCCh60lvTi_Hh'
      );
      // You can display a success message or redirect the user here after successful email submission.
    } catch (error) {
      // Handle the error here, such as showing an error message to the user.
    }
  };

  return (
    <section className="contact" id='contact'>
      <div className="video-container">
        <video autoPlay loop muted playsInline onTouchMove={e => e.target.play()}>
          <source src={backgroundVideo} type="video/webm" />
        </video>
      </div>
      <div className="contact__container">

        <div className="contact__text">
          <span className="contact__text--bold" >LET'S <br />COLLAB!</span>

          <p>You can contact me by filling the form or by <br /> clicking any of the links below.</p>

        </div>
        <div className="contact__card">

          <Formik

            initialValues={{
              name: '',
              email: '',
              phone: '',
              message: '',

            }}
            enableReinitialize
            onSubmit={handleSubmit}
            validationSchema={ValidationSchema}
          >
            <Form >
              <InputField
                name='name'
                placeholder='Name'
                type="text"
              />
              <InputField
                name="email" placeholder="Email"
                type="text"
              />
              <InputField
                name="phone" placeholder="Whatsapp No."
                type="text"
              />
              <InputField
                name="message" placeholder="Message"
                type="text"
              />


              <button type="submit" className="btn btn-primary">Submit</button>
            </Form>

          </Formik>
        </div>


      </div>
    </section >
  )
}
