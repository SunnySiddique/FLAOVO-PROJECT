import { Route, Routes } from "react-router-dom";
import Protected from "./Components/Protected";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Success from "./pages/Success";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Protected element={<Success />} />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
