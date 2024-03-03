import { Route, Routes } from "react-router-dom";
import Page from "../../Page";
import MaisProjetos from "../sections/MaisProjetos.jsx";

const AppRoutes = () => {
    return ( 
        <Routes>
         <Route path="/" element={<Page />} />
         <Route path="/MaisProjetos" element={<MaisProjetos />} />
        </Routes>
     );
}
 
export default AppRoutes;