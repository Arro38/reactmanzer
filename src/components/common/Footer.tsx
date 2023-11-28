import { Github, Linkedin, Slack, Twitter } from "lucide-react";
import MentionsLegales from "./MentionsLegales";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" bg-slate-100 border-t  ">
      <div className="container flex  items-center justify-between px-4 pt-8 mx-auto  lg:justify-between flex-col md:flex-row">
        <ul className="flex items-center space-x-4 flex-col md:flex-row">
          <li>
            <a href={"mailto:contact@formaterz.fr"}>Contactez-moi</a>
          </li>
          <li>
            <Link to="/politique">Politique de confidentialité</Link>
          </li>
          <li>
            <MentionsLegales />
          </li>
        </ul>

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
      <p className="justify-center items-center py-2 flex flex-col md:flex-row">
        <div>© 2023 Etienne VAYTILINGOM.</div>
        <div>Tous droits réservés.</div>
      </p>
    </footer>
  );
}

export default Footer;
