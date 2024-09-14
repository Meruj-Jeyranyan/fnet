import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "components/layout";
import Login from "pages/auth/login";
import Register from "pages/auth/register";
import Forgot from "pages/auth/forgot";

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/forgot"
          element={
            <Layout>
              <Forgot />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoute;
