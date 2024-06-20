"use client";

import React, { FormEvent, useState } from "react";

import ReuseButton from "@/common/ReuseBtn";

import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <section className=" text-white md:px-32">
      <div className=" px-4 mx-auto ">
        <h2 className="mb-4 text-4xl md:text-3xl tracking-tight font-bold text-center ">
          Have a Question or a Brilliant Idea?
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center  sm:text-xl">
          Let's bring it to life together! Reach out to us, and let's create
          something extraordinary.
        </p>
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-8">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium  ">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={user.name}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border active:outline-aqua focus:outline-aqua focus:ring-2  text-gray-900 text-sm rounded-2xl   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-dark dark:text-white dark:focus:outline-none dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium  "
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border active:outline-aqua focus:outline-aqua focus:ring-2  text-gray-900 text-sm rounded-2xl   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-dark dark:text-white dark:focus:outline-none dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@dynamoStitches.com"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium "
            >
              Message
            </label>
            <textarea
              id="message"
              value={user.message}
              name="message"
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border active:outline-aqua focus:outline-aqua focus:ring-2  text-gray-900 text-sm rounded-2xl   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-dark dark:text-white dark:focus:outline-none dark:focus:border-primary-500 dark:shadow-sm-light"
              rows={6}
              placeholder="Let us know how we can help you ?"
            ></textarea>
          </div>
          <button type="submit" className="flex md:float-end ">
            <ReuseButton
              text={"Send Message"}
              mainClass={
                "hover:scale-95 w-[100%] flex-row-reverse bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-400 text-center flex gap-4 flex-row-reverse py-3 rounded-2xl px-8  transition ease-linear delay-150 hover:bg-gradient-to-tl from-purple-600 to-blue-500 "
              }
              textClass={"font-bold text-sm"}
              icon={<IoIosSend size={20} />}
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
