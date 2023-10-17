import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/search";
export function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search/>}/>
        </Routes>
    </BrowserRouter>
  )
}


