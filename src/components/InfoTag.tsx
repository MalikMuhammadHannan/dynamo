import React from "react";

import { IoMdMail } from "react-icons/io";
import { FaClock, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebook, FaPhoneAlt } from "react-icons/fa";

const InfoTag = () => {
  return (
    <div className="shadow-2xl hidden lg:block bg-gradient-to-tl from-purple-600 to-blue-500   p-2 ">
      <ul className="flex justify-evenly items-center ">
        <li className="flex gap-2 items-center">
          <IoMdMail className="" />
          <a href="mailto:order@dynamostitches.com">order@dynamostitches.com</a>
        </li>
        <li className="flex gap-2 items-center">
          <FaPhoneAlt className="" />

          <a href="callto:+1 303-800-6098">+1 303-800-6098</a>
        </li>
        <li className="flex gap-2 items-center">
          <FaClock className="" />
          <p>Working Hours : Monday - Friday, 09 am to 5pm</p>
        </li>
        <li className="flex justify-center gap-5  items-centere">
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61552469626024&mibextid=LQQJ4d"
          >
            <FaFacebook className="" />
          </a>
          <a
            target="_blank"
            href="https://x.com/dynamo_stitches?s=21&t=Yicfow9aDy2i9X737PPplA"
          >
            <FaTwitter className="" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/dynamostitches?igsh=NDN2cWtsbDU1dW5w&utm_source=qr"
          >
            <FaInstagram className="" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/dynamo-stitches/"
          >
            <FaLinkedinIn className="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default InfoTag;
