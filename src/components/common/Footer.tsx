import { Github, Linkedin, Slack, Twitter } from "lucide-react";
import MentionsLegales from "./MentionsLegales";

function Footer() {
  return (
    <footer className=" bg-slate-100 border-t">
      <div className="container flex flex-wrap items-center justify-center px-4 py-8 mx-auto  lg:justify-between">
        <div className="flex flex-wrap justify-center">
          <ul className="flex items-center space-x-4">
            <li>
              <a href={"mailto:formation.etienne.re@gmail.com"}>
                Contactez-moi
              </a>
            </li>
            <li>
              <MentionsLegales />
            </li>
          </ul>
        </div>
        <p className="text-center">
          © 2023 Etienne VAYTILINGOM. Tous droits réservés.
        </p>
        <div className="flex justify-center space-x-4 mt-4 lg:mt-0">
          <a
            className="transition-all hover:scale-105"
            href={"https://formaterz.slack.com/team/U06608XBLTD"}
          >
            <Slack />
          </a>
          <a
            className="transition-all hover:scale-105"
            href={"https://twitter.com/EtienneWorld"}
          >
            <Twitter />
          </a>
          <a
            className="transition-all hover:scale-105"
            href={"https://github.com/Arro38"}
          >
            <Github />
          </a>
          <a
            className="transition-all hover:scale-105"
            href={"https://www.linkedin.com/in/etienne-vaytilingom-b83b5524a/"}
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
