import { FSP_INFO } from "../../constants/translation/whatIsFSP";
import { useState, useEffect } from "react";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./styles.module.scss";
import cn from "classnames";

const WhatIsFSPPage = () => {
   const {
      selectedLanguage: language,
      redirectToRegionPage,
      handleChangePage,
      selectedRegion,
   } = useGetGlobalInfo();

   // Get the content for the selected language
   const content = FSP_INFO[language];

   return (
      <MainLayout>
         <div className="page page1 containerBigger mt-20">
            <div className="firstPageImageBlock"></div>
            <div
               className={cn("main_menu__content", styles.what_is_fsp__content)}
            >
               <button
                  className={"main_menu_back"}
                  onClick={() => handleChangePage("/main_menu")}
               >
                  &#8592;
               </button>

               <section>
                  <h1>{content.title}</h1>
                  <h4>{content.intro}</h4>
                  <h4>{content.definition}</h4>
               </section>

               <section>
                  <h2>{content.examStructure.title}</h2>
                  <h4>{content.examStructure.desc}</h4>
                  <ul>
                     {content.examStructure.parts.map((part, index) => (
                        <li key={index}>
                           <h4>{part.title}</h4>
                           <p>{part.description}</p>
                        </li>
                     ))}
                  </ul>
               </section>
               <section>
                  <h2>{content.preparation.title}</h2>
                  <h4>{content.preparation.desc}</h4>
                  <ul>
                     {content.preparation.points.map((point, index) => (
                        <li key={index}>{point}</li>
                     ))}
                  </ul>
               </section>
               <section>
                  <h2>{content.requirements.title}</h2>
                  <h4>{content.requirements.desc}</h4>
                  <ul>
                     {content.requirements.points.map((point, index) => (
                        <li key={index}>{point}</li>
                     ))}
                  </ul>
               </section>
               <section>
                  <p>{content.additionalCourses}</p>
               </section>
            </div>
         </div>
      </MainLayout>
   );
};

export default WhatIsFSPPage;
