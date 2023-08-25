/* eslint-disable react/no-unescaped-entities */
import { Header } from "./components/header/header";
import "./styles/home.scss";
export default function Home() {
  return (
    <main className="container">
      <Header />
      <div className="experience">
        <h3>Experience</h3>
        <p>2 years working as a Software Developer.</p>
        <div className="experiende-time"></div>
      </div>
      <div className="infos">
      <h3>Languages</h3>
        <div className="languages-info">
          <span>🇺🇸 EN - Fluent</span>
          <span>🇧🇷 PT-BR - Native</span>
        </div>
        <h3>Education</h3>
        <div className="educational-info">
          <span>🎓</span>
          <span>
            Information Systems Bachelor's Degree - Pontifícia Universidade
            Católica de Minas Gerais
          </span>
        </div>
      </div>
      <div className="buttons">
        <div className="social"></div>
        <button>contact me</button>
      </div>
    </main>
  );
}
