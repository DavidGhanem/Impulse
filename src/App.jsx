import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./pages/pages.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
