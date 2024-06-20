import React from "react";

import Banner from "@/components/Banner";
import Privacy from "@/components/Privacy";

const page = () => {
  const data = [
    {
      heading: "Accuracy and Timeliness of Information",
      paragraph:
        "Dynamo Stitches strives to provide accurate and timely information. However, all information and material on the website, including text, graphics, and links, as well as products and services, are provided on an “as is” and “as available” basis. We do not warrant that this site or its contents will be complete, accurate, uninterrupted, secure, or error-free, or that the site or the servers used will be free of viruses.",
    },
    {
      heading: "Cookies",
      paragraph:
        "We employ the use of cookies. By accessing Dynamo Stitches, you agree to use cookies in agreement with Dynamo Stitches' Privacy Policy. Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.",
    },
    {
      heading: "License",
      paragraph:
        "Unless otherwise stated, Dynamo Stitches and/or its licensors own the intellectual property rights for all material on Dynamo Stitches. All intellectual property rights are reserved. You may access this from Dynamo Stitches for your own personal use, subject to restrictions set in these terms and conditions. This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Free Terms and Conditions Generator.",
      subTitle: [
        "Republish material from Dynamo Stitches",
        "Sell, rent or sub-license material from Dynamo Stitches",
        "Reproduce, duplicate or copy material from Dynamo Stitches",
        "Redistribute content from Dynamo Stitches",
      ],
    },
    {
      heading: "Return Policy",
      paragraph:
        "Customers can cancel orders, quotes, and vector requests within 6 hours.",
    },
    {
      heading: "Payment Terms",
      paragraph:
        "We will send the invoice to the customer when the order has been completed and delivered. Orders will be billed at the quoted price or, if a quote was not requested, based on the stitch count as mentioned above or as discussed with the Sales Manager. Special pricing may be available for volume orders. We accept Visa, MasterCard, American Express, and Discover. For terms, please contact us at our TOLL-FREE number: [Your TOLL-FREE Number Here].",
    },
    {
      heading: "Refund Policy",
      paragraph:
        "We offer a 3-day money-back guarantee if you are not satisfied. Please submit a request to our Accounts and Administration Department for consideration.",
    },
    {
      heading: "Shipping Policy",
      paragraph:
        "All orders, quotes, and vectors placed with Dynamo Stitches will be delivered via email or uploaded to our website. If physical delivery is requested, we will use air or ground courier services, with delivery charges added to the customer’s bill.",
    },
    {
      heading: "Reservation of Rights",
      paragraph:
        "We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.",
    },
    {
      heading: "Removal of Links from Our Website",
      paragraph:
        "If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.",
    },
    {
      heading: "Disclaimer",
      paragraph:
        "To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will: - limit or exclude our or your liability for death or personal injury. - limit or exclude our or your liability for fraud or fraudulent misrepresentation. - limit any of our or your liabilities in any way that is not permitted under applicable law. - exclude any of our or your liabilities that may not be excluded under applicable law. The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty. As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.",
      subTitle: [
        "limit or exclude our or your liability for death or personal injury.",
        "limit or exclude our or your liability for fraud or fraudulent misrepresentation.",
        "limit any of our or your liabilities in any way that is not permitted under applicable law.",
        "exclude any of our or your liabilities that may not be excluded under applicable law",
      ],
    },
  ];

  const subpara =
    "By accessing and using our website, you agree to comply with the following terms and conditions of use. If you do not agree to these terms, please refrain from using our website. Dynamo Stitches reserves the right to revise these terms, so please review them regularly. All information on the site is subject to change without notice.";
  return (
    <div className="flex py-10 flex-col gap-16">
      <Privacy
        data={data}
        mainHeading={"Terms & Conditions"}
        subpara={subpara}
      />
      <Banner />
    </div>
  );
};

export default page;
