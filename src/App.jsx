import { Route, Routes } from "react-router-dom";
import Pages from "./views/pages";
import Client from "./views/Client";
import LoginPage from "./views/Auth/loginPage";
import AuthPage from "./views/Auth/authPage";
import ClientAdmin from "./views/ClientAdmin";
import { Navigate } from "react-router-dom";
import BlogPostAdder from "./views/Admin/blog-post-adder";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Client />}>
          <Route index element={<Pages />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<AuthPage />} />
        </Route>
        <Route path="/admin" element={<ClientAdmin />}>
          <Route index element={<Navigate replace to="/admin/blogPostAdder" />} />
          <Route path="/admin/blogPostAdder" element={<BlogPostAdder />} />
        </Route>
      </Routes>
    </>
  )
};

export default App
