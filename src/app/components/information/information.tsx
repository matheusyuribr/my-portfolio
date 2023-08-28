/* eslint-disable react/no-unescaped-entities */
import { SectionTittle } from "../sectionTittle/section-tittle"
import "./information.scss"
export function Information(){
    return(
        <div className="infos">
      <SectionTittle text="Languages"/>
        <div className="languages-info">
          <span>🇺🇸 EN - Fluent</span>
          <span>🇧🇷 PT-BR - Native</span>
        </div>
        <SectionTittle text="Education"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>
            Information Systems Bachelor's Degree - Pontifícia Universidade
            Católica de Minas Gerais
          </span>
        </div>
      </div>
    )
}