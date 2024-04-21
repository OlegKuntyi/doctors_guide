import { languages, DEFAULT_LANGUAGE } from "../constants/translation/global";
import { localStorageGet, localStorageSet } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";

const useGetFlobalInfo = () => {
   const selectedLanguage = localStorageGet(
      "selectedLanguage",
      DEFAULT_LANGUAGE
   );

   const navigate = useNavigate();

   const currentPage = localStorageGet("currentPage", "/main_menu");
   const selectedRegion = localStorageGet("selectedRegion", "");

   const handleChangePage = (page_name) => {
      localStorageSet("currentPage", page_name);
      window.scrollTo(0, 0);
      navigate(page_name);
   };

   const redirectToRegionPage = (e) => {
      e.preventDefault();
      localStorageSet("currentPage", "lands");
      navigate("/lands");
   };

   return {
      selectedLanguage,
      languages,
      currentPage,
      redirectToRegionPage,
      handleChangePage,
      selectedRegion
   };
};

export default useGetFlobalInfo;
