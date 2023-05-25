import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { UserCreate } from "./pages/UserCreate"
import { Admin } from "./pages/Admin"
import { About } from "./pages/About"
import { RequireAuth } from "./components/RequireAuth"

import "./App.css"
import "antd/dist/reset.css"

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/user-create"
            element={<RequireAuth allowedRole="user" />}
          >
            <Route path="/user-create" element={<UserCreate />} />
          </Route>
          <Route path="/admin" element={<RequireAuth allowedRole="admin" />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
