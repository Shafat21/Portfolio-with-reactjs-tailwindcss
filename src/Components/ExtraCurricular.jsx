import React from "react";
import { Description } from "./Description";

export const ExtraCurricular = ({ extraCurricular }) => {
  return (
    <section className="extraCurricular-experience section" id="extraCurricular">
      <h2 className="section-title">EXTRA-CURRICULAR ACTIVITIES</h2>
      <div className="experience__container bd-grid">
        {extraCurricular.map((project) => (
          <Project key={project.company} {...project} />
        ))}
      </div>
    </section>
  );
};

const Project = ({ name, company, period, description }) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title">
          {name} - {company}
        </h3>
        <span className="experience__proyect">{period}</span>
        {description.map((desc, i) => <Description key={i} desc={desc} />)}
      </div>
    </div>
  );
};
