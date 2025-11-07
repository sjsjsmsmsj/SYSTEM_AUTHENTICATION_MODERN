import { BrowserRouter, Route, Routes } from "react-router";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";
import ChatAppPage from "./pages/ChatAppPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { useEffect } from "react";
import { useAuthStore } from "./stores/useAuthStore";


function App() {
  useEffect(() => {
    useAuthStore.getState().checkAuth();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<ChatAppPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
