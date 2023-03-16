import { BrowserRouter, Route, Routes } from "react-router-dom";

import Page1 from "../pages/FormStep1/Index";
import Page2 from "../pages/FormStep2/Index";
import Page3 from "../pages/FormStep3/Index";
import Page4 from "../pages/FormStep4/Index";
import Page5 from "../pages/FormStep5/Index";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/plans" element={<Page2 />} />
        <Route path="/services" element={<Page3 />} />
        <Route path="/summary" element={<Page4 />} />
        <Route path="/finish" element={<Page5 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
