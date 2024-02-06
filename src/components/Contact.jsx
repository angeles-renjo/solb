"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaVimeo, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const SocialIcons = ({ size }) => (
  <ul className="social">
    <li className="social-item">
      <a href="#" className="social-link">
        <FaVimeo size={size} />
      </a>
    </li>
    <li className="social-item">
      <a href="#" className="social-link">
        <FaLinkedin size={size} />
      </a>
    </li>
    <li className="social-item">
      <a href="#" className="social-link">
        <FaYoutube size={size} />
      </a>
    </li>
    <li className="social-item">
      <a href="#" className="social-link">
        <FaInstagram size={size} />
      </a>
    </li>
  </ul>
);

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsButtonDisabled(true); // disable the button

    emailjs
      .send(
        "service_pyyfskg",
        "template_511bf2y",
        form,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Form submitted successfully!");
          setTimeout(() => setIsButtonDisabled(false), 60000); // re-enable the button after 1 minute
        },
        (error) => {
          console.log(error.text);
          toast.error("An error occurred. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Toaster />
      <section className=" flex flex-col md:flex-row items-center justify-center">
        <div className="min-w-[400px] w-1/2 p-10 space-y-4 text-wrap">
          <h2 className="tracking-widest text-3xl p-2 font-bold">
            Let's Work Together
          </h2>
          <p className="tracking-wider text-2xl font-light">
            Further case studies available upon request. Please provide some
            information on your project or goals and we'll move the conversation
            on from there.
          </p>
          <div className="border-solid border-black border-2"></div>
          <p>Based, Sydney Australia</p>
          <div>
            <SocialIcons size={35} />
          </div>
        </div>

        <form className="w-full md:w-[400px] px-10" onSubmit={sendEmail}>
          <div className="flex flex-col sm:flex-row  sm:space-y-0 sm:space-x-2">
            <div className="space-y-2 mr-2">
              <label className="block">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                value={form.firstName}
                required
                className="shadow appearance-none border rounded py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="block">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder=" Last Name"
                onChange={handleChange}
                value={form.lastName}
                required
                className="shadow appearance-none border rounded py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2 pb-2">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Your Email"
              value={form.email}
              required
              className="shadow appearance-none border rounded py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />

            <label>Subject</label>
            <input
              type="text"
              name="subject"
              onChange={handleChange}
              placeholder="Subject"
              value={form.subject}
              required
              className="shadow appearance-none border rounded py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>

          <textarea
            name="message"
            onChange={handleChange}
            placeholder="Your Message"
            value={form.message}
            required
            className="w-full shadow appearance-none border rounded py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            disabled={isButtonDisabled}
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
