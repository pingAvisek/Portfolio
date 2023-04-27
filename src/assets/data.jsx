import {
  BsGithub,
  BsTwitter,
  BsLinkedin,
  BsTelegram,
  BsFacebook,
} from "react-icons/bs";

export default [
  {
    navLinks: [
      {
        icons: <BsGithub color="#171515" />,
        url: "https://github.com/pingAvisek",
        slug: "github",
        title: "Github",
      },
      {
        icons: <BsLinkedin color="#0072b1" />,
        url: "https://www.linkedin.com/in/pingavisek/",
        slug: "linkedin",
        title: "Linkedin",
      },
      {
        icons: <BsTwitter color="#00acee" />,
        url: "https://twitter.com/pingAvisek",
        slug: "twitter",
        title: "Twitter",
      },
      {
        icons: <BsTelegram color="#0088cc" />,
        url: "https://t.me/pingAvisek",
        slug: "telegram",
        title: "Telegram",
      },
      {
        icons: <BsFacebook color="#3b5998" />,
        url: "https://www.facebook.com/pingAvisek",
        slug: "facebook",
        title: "Facebook",
      },
    ],
  },
];
