import { Route, Routes } from "react-router-dom";
import Pages from "./views/pages";
import Client from "./views/Client";
import LoginPage from "./views/Auth/loginPage";
import AuthPage from "./views/Auth/authPage";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Client />}>
          <Route index element={<Pages />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<AuthPage />} />
        </Route>
      </Routes>
    </>
  )
};

export default App
