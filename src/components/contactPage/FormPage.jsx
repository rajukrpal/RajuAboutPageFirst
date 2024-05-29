

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Wrapper = styled.section``;

const ContactPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const form = useRef();

  useEffect(() => {
    
  }, []); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username || !email || !textarea) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    console.log("Form submitted successfully!");

    emailjs
      .sendForm("service_7bhvv6d", "template_sy3ncog", form.current, {
        publicKey: "Z8ZcdIzS9gQOwplC_",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          
          toast.success("Form submitted successfully!");
          setUsername("");
          setEmail("");
          setTextarea("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
    <Header />
      <Box className="lg:flex lg:h-[80vh]">
        <div className="w-full py-5 px-8 flex justify-center">
          <div className="w-full">
            <Wrapper className="section">
              <h2 className="text-2xl py-6 text-center font-bold">
                My Location
              </h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28828.905183177096!2d84.24664810038227!3d25.41775681026244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1716881179292!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Wrapper>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="py-6">
            <div className="w-full">
              <center className="w-[300px]">
                <Typography
                  className="py-5"
                  variant="h5"
                  sx={{ fontWeight: "700" }}
                >
                  Contact Me
                </Typography>
              </center>
            </div>
            <Box
              className="flex flex-col gap-5"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
             
                <form className="space-y-4" ref={form} onSubmit={handleSubmit}>
                  <TextField 
                  className=""
                    style={{
                      width: "300px",
                      margin: "5px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                    }}
                    type="text"
                    label="UserName"
                    variant="filled"
                    name="from_name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <TextField
                    style={{
                      width: "300px",
                      margin: "5px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                    }}
                    type="email"
                    label="Gmail"
                    variant="filled"
                    name="from_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <BaseTextareaAutosize
                    style={{
                      width: "300px",
                      margin: "5px",
                      color: "black",
                      padding: "0px 15px",
                      border: "none",
                      borderRadius: "5px",
                      outline: "none",
                    }}
                    aria-label="minimum height"
                    minRows={5}
                    maxRows={50}
                    placeholder="Minimum 5 rows"
                    value={textarea}
                    onChange={(e) => setTextarea(e.target.value)}
                    name="message"
                  />
                  <div>
                    <center className="w-[300px]">
                      <Button
                        className=""
                        size="medium"
                        type="submit"
                        variant="outlined"
                        color="primary"
                      >
                        Save
                      </Button>
                    </center>
                  </div>
                </form>
          
            </Box>
          </div>
        </div>
      </Box>
      <ToastContainer position="top-center" />
      <Footer />
    </>
  );
};

export default ContactPage;
