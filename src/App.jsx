
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import './css/common.css'
import Landing from './components/landing';
import Eduflex from "./components/eduflex";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/edu" element = {<Eduflex/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
