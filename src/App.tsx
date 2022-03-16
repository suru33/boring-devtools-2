import { Route, Routes } from "react-router-dom";
import StringTools from "./pages/StringTools";
import DateTools from "./pages/DateTools";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="string-tools" element={<StringTools/>}/>
        <Route path="date-tools" element={<DateTools/>}/>
      </Routes>
    </div>
  );
};

export default App;
