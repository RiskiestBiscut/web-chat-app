import { Navigate, Route, Routes } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/homePage/HomePage"
import LoginPage from "./pages/loginPage/LoginPage"
import SignupPage from "./pages/signupPage/SignupPage"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext"




function App() {
  const {authUser} = useAuthContext();

  return (
    <div className="p-4 h-screen flex items-center justify-center">
     <Routes>
      <Route path='/' element={authUser ? <HomePage /> : <Navigate to="/login" />} />
      <Route path='/login' element={authUser ? <Navigate to="/" /> : <LoginPage />} />
      <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignupPage />} />
     </Routes>
     <Toaster />
    </div>
  )
}

export default App
