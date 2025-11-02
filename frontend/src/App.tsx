import { BrowserRouter, Route, Routes } from "react-router";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";
import ChatAppPage from "./pages/ChatAppPage";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChatAppPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
