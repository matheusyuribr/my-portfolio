/* eslint-disable react/no-unescaped-entities */
import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Information } from "./components/information/information";
import "./styles/home.scss";
import { MailIcon } from "./components/icons/mail-icon";
import { Social } from "./components/social/social";
export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Information />
      <div className="buttons">
        <Social/>
        <button className="primary-button">CONTACT ME
        <MailIcon/>
        </button>
      </div>
    </main>
  );
}
