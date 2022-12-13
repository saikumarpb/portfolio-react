import React from "react";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "../../assets/github-icon.svg";
import { ReactComponent as MailIcon } from "../../assets/mail-icon.svg";
import { ReactComponent as TelegramIcon } from "../../assets/telegram-icon.svg";

function ContactSection() {
  const contactDetails: {
    platform: string;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    url: string;
  }[] = [
    {
      platform: "Linkedin",
      icon: LinkedinIcon,
      url: "https://www.linkedin.com/in/sai-kumar-pusarla/",
    },
    {
      platform: "Github",
      icon: GithubIcon,
      url: "https://github.com/saikumarpb",
    },
    {
      platform: "Email",
      icon: MailIcon,
      url: "mailto:saipusarla7094@gmail.com",
    },
    {
      platform: "Telegram",
      icon: TelegramIcon,
      url: "https://t.me/SaiKumarPB",
    },
  ];

  const routeToUrl = (url: string) => window.open(url, "_blank");
  return (
    <div className="bg-blue-100 w-full absolute bottom-0 flex flex-col items-center justify-center p-4 text-blue-800">
      <h4> Let's get in touch</h4>
      <div className="flex">
        {contactDetails.map((xs) => (
          <button
            className="p-4"
            onClick={() => routeToUrl(xs.url)}
            type="button"
          >
            <xs.icon className="w-8 h-8" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ContactSection;
