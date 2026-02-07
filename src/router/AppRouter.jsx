import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "../components/Layout"
import Subscribe from "../pages/Subscribe"
import Success from "../pages/Success"

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<h1>Home page</h1>} />        
          <Route path="subscribe" element={<Subscribe />} />        
          <Route path="success" element={<Success />} />        
        </Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />        
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter