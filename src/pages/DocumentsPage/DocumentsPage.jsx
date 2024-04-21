import { documents } from "../../constants/translation/documents";
import useGetFlobalInfo from "../../hooks/useGetFlobalInfo";
import MainLayout from "../../layouts/MainLayout/MainLayout";

const DocumentsPage = () => {
   const {
      selectedLanguage: language,
      redirectToRegionPage,
      handleChangePage,
      selectedRegion,
   } = useGetFlobalInfo();

   return (
      <MainLayout>
         <div className="page page1 containerSmall mt-20">
            <div className="firstPageImageBlock"></div>
            <div className={"main_menu__content"}>
               <div>
                  <h1>Documents</h1>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                     <thead>
                        <tr>
                           <th
                              style={{
                                 borderBottom: "1px solid #ddd",
                                 padding: "10px",
                              }}
                           >
                              Name
                           </th>
                           <th
                              style={{
                                 borderBottom: "1px solid #ddd",
                                 padding: "10px",
                              }}
                           >
                              Description
                           </th>
                        </tr>
                     </thead>
                     <tbody>
                        {documents.map((document, index) => (
                           <tr key={index}>
                              <td
                                 style={{
                                    border: "1px solid #ddd",
                                    padding: "10px",
                                 }}
                              >
                                 {document.category}
                              </td>
                              <td
                                 style={{
                                    border: "1px solid #ddd",
                                    padding: "10px",
                                 }}
                              >
                                 {document.description}
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
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
