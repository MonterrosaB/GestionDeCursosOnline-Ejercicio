import { BrowserRouter as Router, Routes, Route } from "react-router";

import PageWelcome from "./src/pages/PageWelcome/PageWelcome";
import PageDashboard from "./src/pages/PageDashboard/PageDashboard";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<PageWelcome />} path="/" />
          <Route element={<PageDashboard />} path="/dashboard" />
        </Routes>
      </Router>
    </>
  )
}

export default App
