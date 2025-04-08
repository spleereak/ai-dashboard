import {Route, Routes} from "react-router-dom";
import Dashboard from "@/pages/Dashboard.tsx";
import {DashboardLayout} from "@/layouts/DashboardLayout.tsx";

function App() {
  return (
    <Routes>
      <Route path='/' element={<>Главная</>} />
      <Route path='/dashboard' element={<DashboardLayout />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App
