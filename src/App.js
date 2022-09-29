import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components";
import Dashboard from "./components/Dashboard";
import { useEffect } from "react";
import { login } from "./actions";

function App() {
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.loggedIn);

  useEffect(() => {
    if (document.cookie && !isLogged) {
      const username = document.cookie.split(";")[0].split("=")[1];
      const password = document.cookie.split(";")[1].split("=")[1];

      if (username && password) {
        dispatch(login());
      }
    }
  }, []);

  function PrivateRoute({ children }) {
    if (isLogged) {
      return children;
    } else {
      return <Login />;
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
