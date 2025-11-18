import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientForm from "./ClientForm";
import Success from "./Success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientForm />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
