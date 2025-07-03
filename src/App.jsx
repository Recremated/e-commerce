import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageContent />}>
          <Route index element={<HomePage />} />
          {/*to be continued*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
