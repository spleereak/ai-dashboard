import {Route, Routes} from "react-router-dom";
import Dashboard from "@/pages/Dashboard.tsx";
import {DashboardLayout} from "@/layouts/DashboardLayout.tsx";
import Home from "@/pages/Home.tsx";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<DashboardLayout />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App
