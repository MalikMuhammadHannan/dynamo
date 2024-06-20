import React from "react";

import Banner from "@/components/Banner";
import Privacy from "@/components/Privacy";

const page = () => {
  const data = [
    {
      heading: "What Information Do We Collect?",
      paragraph:
        "When you visit our website or use our services, we may collect various types of information, including:",
      subTitle: [
        "Personal Information: Your name, email address, phone number, and shipping address, which you provide when placing an order or contacting us.",
        "Payment Information: Your billing information and payment method, which are securely processed by our payment processors.",
        "Usage Information: Information about how you interact with our website, such as your IP address, browser type, and device identifiers.",
        "Cookies: We use cookies and similar tracking technologies to enhance your browsing experience and analyze how our website is used.",
      ],
    },
    {
      heading: "How Do We Use Your Information?",
      paragraph:
        "We use the information we collect for the following purposes:",
      subTitle: [
        "To Provide Services: Fulfilling your orders, processing payments, and delivering products to you.",
        "To Communicate: Sending you order updates, responding to your inquiries, and providing customer support.",
        "To Improve: Analyzing trends and user interactions to enhance our website, products, and services.",
        "To Comply: Meeting legal and regulatory requirements.",
      ],
    },
    {
      heading: "How Do We Protect Your Information?",
      paragraph:
        "We take the security of your information seriously and have implemented a variety of security measures to protect it from unauthorized access, disclosure, alteration, or destruction. We use industry-standard encryption protocols to safeguard your data during transmission.",
      subTitle: [],
    },
    {
      heading: "Third-Party Services",
      paragraph:
        "We may use third-party services to help us operate our business and provide our services, such as payment processors and shipping partners. These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.",
      subTitle: [],
    },
    {
      heading: "Your Choices and Rights",
      paragraph:
        "You have the right to access, update, or delete your personal information. If you wish to exercise these rights or have any questions about our Privacy Policy, please contact us.",
      subTitle: [],
    },
    {
      heading: "Updates to Our Privacy Policy",
      paragraph:
        "We may update our Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page, so please review it periodically.",
      subTitle: [],
    },
    {
      heading: "Contact Us",
      paragraph:
        "If you have any questions or concerns about our Privacy Policy or our practices regarding your personal information, please contact us at [Your Contact Information Here].",
      subTitle: [],
    },
  ];
  const subpara =
    "Welcome to Dynamo Stitches, where your privacy is as important to us as the art we create. This Privacy Policy is our commitment to transparency, explaining how we collect, use, protect, and disclose your personal information. By engaging with our website or services, you trust us with your information, and we take that trust seriously.";
  return (
    <div className="flex py-10 flex-col gap-16">
      <Privacy data={data} mainHeading={"Privacy Policy"} subpara={subpara} />
      <Banner />
    </div>
  );
};

export default page;
