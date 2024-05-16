import Table from "../../components/Table/Table";
import { documents, messages } from "../../constants/translation/documents";
import { useState, useEffect, useRef } from "react";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./styles.module.scss";
import { useReactToPrint } from "react-to-print";

const DocumentsPage = () => {
   const {
      selectedLanguage: language,
      redirectToRegionPage,
      handleChangePage,
      selectedRegion,
   } = useGetGlobalInfo();

   const tableRef = useRef(null);
   const [tableData, setTableData] = useState(documents);
   const [progress, setProgress] = useState(0);
   const savedData = localStorage.getItem("docs_table_data");

   const handlePrint = useReactToPrint({
      content: () => tableRef.current,
   });

   useEffect(() => {
      if (savedData) {
         setTableData(JSON.parse(savedData));
      }
   }, []);

   useEffect(() => {
      localStorage.setItem("docs_table_data", JSON.stringify(tableData));
   }, [tableData]);

   const calculateProgress = () => {
      let totalCheckboxes = 0;
      let checkedCheckboxes = 0;

      const filteredData = tableData?.filter((item) => !item?.hide);

      filteredData.forEach((item) => {
         Object.keys(item).forEach((key) => {
            if (item[key] === "check") {
               checkedCheckboxes++;
            }
            if (
               key !== "id" &&
               key !== "category" &&
               key !== "English" &&
               key !== "German" &&
               item[key] !== "not_check"
            ) {
               totalCheckboxes++;
            }
         });
      });

      let progress = 0;
      if (totalCheckboxes > 0) {
         progress = (checkedCheckboxes / totalCheckboxes) * 100;
      }
      return progress.toFixed(0);
   };

   useEffect(() => {
      setProgress(calculateProgress());
   }, [tableData]);

   const getMessage = (progress) => {
      if (progress < 20) {
         return messages[language].lessThan20;
      } else if (progress < 50) {
         return messages[language].between20And50;
      } else if (progress < 80) {
         return messages[language].between50And80;
      } else {
         return messages[language].greaterThan80;
      }
   };

   return (
      <MainLayout>
         <div className="page page1 containerBigger mt-20">
            <div className="firstPageImageBlock"></div>
            <div className={"main_menu__content"}>
               <div className={styles.table_wrapper}>
                  <div className={styles.progress_wrapper}>
                     <div className={styles.progressBar}>
                        <div
                           className={styles.progress}
                           style={{ width: `${progress}%` }}
                        ></div>
                     </div>
                     <div className={styles.progressLabel}>
                        {progress}% - {getMessage(progress)}
                     </div>
                  </div>
                  <Table
                     columns={[
                        { name: "category", label: "Документ" },
                        { name: "is_exist", label: "Наявно" },
                        { name: "apostile", label: "Апостиль" },
                        { name: "notary", label: "Завірено нотаріусом" },
                        { name: "translation", label: "Професійний переклад" },
                        { name: "ready_copies", label: "Завірені копії" },
                        { name: "sent", label: "Відправлено" },
                     ]}
                     tableRef={tableRef}
                     data={tableData}
                     setTableData={setTableData}
                  />
               </div>
               <button
                  className={"main_menu_back"}
                  onClick={() => handleChangePage("/main_menu")}
               >
                  &#8592;
               </button>
               <button className={styles.printBtn} onClick={handlePrint}>
                  Print
               </button>
            </div>
         </div>
      </MainLayout>
   );
};

export default DocumentsPage;
