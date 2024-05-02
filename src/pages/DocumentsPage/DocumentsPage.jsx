import Table from "../../components/Table/Table";
import { documents } from "../../constants/translation/documents";
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

   return (
      <MainLayout>
         <div className="page page1 containerSmall mt-20">
            <div className="firstPageImageBlock"></div>
            <div className={"main_menu__content"}>
               <div className={styles.table_wrapper}>
                  <h1>Documents</h1>
                  <Table
                     columns={[
                        { name: "optional", label: "Опціонально" },
                        { name: "category", label: "Документи" },
                        { name: "is_exist", label: "Наявно" },
                        { name: "apostile", label: "Апостиль" },
                        { name: "notary", label: "Завірено нотаріусом" },
                        { name: "application", label: "Подача заяви" },
                        { name: "translation", label: "Професійний переклад" },
                        { name: "ready_copies", label: "Завірені копії" },
                        { name: "sent", label: "Відправлено" },
                     ]}
                     data={documents}
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
