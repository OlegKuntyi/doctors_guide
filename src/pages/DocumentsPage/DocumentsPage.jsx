import Table from "../../components/Table/Table";
import { documents } from "../../constants/translation/documents";
import { useState } from "react";
import useGetGlobalInfo from "../../hooks/useGetGlobalInfo";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./styles.module.scss";

const DocumentsPage = () => {
   const {
      selectedLanguage: language,
      redirectToRegionPage,
      handleChangePage,
      selectedRegion,
   } = useGetGlobalInfo();

   const [tableData, setTableData] = useState(documents);

   return (
      <MainLayout>
         <div className="page page1 containerSmall mt-20">
            <div className="firstPageImageBlock"></div>
            <div className={"main_menu__content"}>
               <div className={styles.table_wrapper}>
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
            </div>
         </div>
      </MainLayout>
   );
};

export default DocumentsPage;
