import React from "react";
import contactImg from "../assets/contact-img.svg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[100vh] w-[100vw]  bg-gradient-to-r from-[rgba(170,54,124,0.5)] to-[rgba(74,47,189,0.5)]"
    >
      <div className="flex flex-col lg:flex-row p-10  justify-center">
        <section className="flex-1">
          <img src={contactImg} alt="Contact-image" className="w-full mt-5" />
        </section>
        <section className="flex-1">
          <h1 className="text-[30px] lg:text-[55px] font-bold">Get In Touch</h1>
          <form
            className="w-full"
            action="https://getform.io/f/2e3b62f2-d020-4f0d-a749-80cd7a87c6a7"
            method="POST"
          >
            <div className="w-full flex flex-col md:flex-row gap-4 my-4">
              <input
                required
                name="firstName"
                type="text"
                placeholder="First Name"
                className=" bg-black/30 outline-none  rounded-xl p-3 flex-1"
              />
              <input
                required
                name="lastName"
                type="text"
                placeholder="Last Name"
                className=" bg-black/30 outline-none  rounded-xl p-3 flex-1"
              />
            </div>
            <div className="w-full flex gap-4 my-4 flex-col md:flex-row">
              <input
                required
                type="email"
                name="email"
                placeholder="Email Address"
                className=" bg-black/30 outline-none  rounded-xl p-3 flex-1"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone No."
                className=" bg-black/30 outline-none  rounded-xl p-3 flex-1"
              />
            </div>
            <div className="w-full flex gap-4 my-4 flex-col md:flex-row">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                cols="30"
                rows="10"
                className="bg-black/30 outline-none  rounded-xl p-3 flex-1"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="rounded-xl w-full py-3 text-xl bg-gradient-to-r from-[rgba(170,54,124,0.5)] to-[rgba(74,47,189,0.5)] hover:border duration-500"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Contact;
