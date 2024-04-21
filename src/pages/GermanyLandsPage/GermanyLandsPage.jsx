import GermanyMap from "../../components/GermanyMap/GermanyMap";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import useGetFlobalInfo from "../../hooks/useGetFlobalInfo";

const GermanyLandsPage = ({ handleNextPage }) => {
   const { selectedLanguage, languages, handleChangePage } = useGetFlobalInfo();

   return (
      <MainLayout>
         <div className="page page2">
            <h2 className="mt-20">
               {languages[selectedLanguage].choose_region}
            </h2>

            <GermanyMap />
            <button onClick={()=> handleChangePage('/')}>
               {languages[selectedLanguage].back}
            </button>

            <button onClick={()=> handleChangePage('/main_menu')}>
               {languages[selectedLanguage].continue}
            </button>
         </div>
      </MainLayout>
   );
};

export default GermanyLandsPage;
