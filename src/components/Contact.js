import React, { useState } from "react";
import "./Contact.css";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import Button from "@material-ui/core/Button";

import emailjs from "emailjs-com";
import apiKeys from "../apiKeys";

function Contact() {
  const [name, setName] = useState("");
  const [subject, setsubject] = useState("");
  const [mailId, setMailId] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log("inside handle submit");
    emailjs
      .sendForm("checkEmail", apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
      .then(
        (result) => {
          alert("Message Sent, I'll get back to you shortly", result.text);
        },
        (error) => {
          alert("An error occured, Plese try again", error.text);
        }
      );
    setName("");
    setsubject("");
    setMailId("");
    setMessage("");
  };

  return (
    <div className='contact' id='contact'>
      <h1>
        Get in <span style={{ color: "#266150" }}>Touch</span>
      </h1>
      <div className='contact__section'>
        <div className='contact__info'>
          <h3>DON'T BE SHY !</h3>
          <p className=''>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className='mail'>
            <EmailIcon style={{ color: "#266150" }} />
            <div className='mail__detail'>
              <h3>Mail Me</h3>
              <p className=''>vivek@gmail.com</p>
            </div>
          </div>
          <div className='callNumber'>
            <CallIcon style={{ color: "#266150" }} />
            <div className='call__detail'>
              <h3>Call Me</h3>
              <p>+9847065789</p>
            </div>
          </div>
          <div className='social__account'>
            <GitHubIcon style={{ color: "#266150" }} />
            <LinkedInIcon style={{ color: "#266150" }} />
            <FacebookIcon style={{ color: "#266150" }} />
            <TwitterIcon style={{ color: "#266150" }} />
          </div>
        </div>
        <form className='contact__form' onSubmit={handleSubmit}>
          <div className='contact__form__input'>
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Name'
            />
            <input
              name='mailId'
              type='email'
              value={mailId}
              onChange={(e) => setMailId(e.target.value)}
              placeholder='Your Email'
            />
            <input
              type='text'
              name='subject'
              value={subject}
              onChange={(e) => setsubject(e.target.value)}
              placeholder='Your Subject'
            />
          </div>
          <textarea
            type='text'
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Your Message'
          />
          <Button
            variant='contained'
            style={{ backgroundColor: "#266150", color: "white" }}
            type='submit'
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
