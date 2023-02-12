// import React from 'react';

// export default function Contact() {
//   return (
//     <div className="px-3">
//       <h1>Contact Page</h1>
//       <p>
//         Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
//         molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
//         magna a ultrices. Aenean pellentesque placerat lacus imperdiet
//         efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
//         mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
//         posuere, eget tristique dui dapibus. Maecenas fermentum elementum
//         faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
//         ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
//         dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
//         conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
//         rhoncus. Etiam vel condimentum magna, quis tempor nulla.
//       </p>
//     </div>
//   );
// }

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
// import helper functions to validate email and name
import { checkName, validateEmail, checkMessage } from '../../utils/helpers';
import '../../styles.css';

function Form() {
  const form = useRef();

  // setting up form and initial values
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const SERVICE = process.env.REACT_APP_SERVICE;
  const TEMPLATE = process.env.REACT_APP_TEMPLATE;
  const PUBLIC = process.env.REACT_APP_PUBLIC;

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit
    e.preventDefault();
    // validate email
    if (!validateEmail(email)) {
      setErrorMessage('Email or name is invalid.');
      return;
    }
    // validate first/last name
    if (!checkName(name)) {
      setErrorMessage('Name is invalid. Please include first and last name.');
      return;
    }
    // message cannot be blank
    if (!checkMessage(message)) {
      setErrorMessage(
        `Hello, ${name}. Please include content in your message. Thank you.`
      );
      return;
    }
    alert(
      `Hello ${name}. Thank you for reaching out. I'll get back to you soon.`
    );
    emailjs.sendForm(SERVICE, TEMPLATE, form.current, PUBLIC).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    // clear form after submit
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className="px-3">
      <h1>Contact Me</h1>
      <p>Hello {name}</p>
      <form className="form px-3 my-3" ref={form} onSubmit={handleFormSubmit}>
        <input
          className="row w-50"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="first and last name"
        />
        <input
          className="row w-50 my-3"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          className="row w-50 my-3"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button
          className="row button"
          type="button"
          onClick={handleFormSubmit}
          value="Send"
        >
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

// // export const ContactUs = () => {
// const form = useRef();

// const sendEmail = (e) => {
//   e.preventDefault();

//   emailjs
//     .sendForm(
//       'YOUR_SERVICE_ID',
//       'YOUR_TEMPLATE_ID',
//       form.current,
//       'YOUR_PUBLIC_KEY'
//     )
//     .then(
//       (result) => {
//         console.log(result.text);
//       },
//       (error) => {
//         console.log(error.text);
//       }
//     );
// };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
export default Form;
