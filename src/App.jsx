import { Route, Routes } from "react-router-dom";
import Pages from "./views/pages";
import Client from "./views/Client";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Client />}>
          <Route index element={<Pages />} />
        </Route>
      </Routes>
    </>
  )
};

export default App
