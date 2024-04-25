import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/nopage/NoPage";
import ProjectInfo from './pages/projectInfo/ProjectInfo';
import ScrollTop from "./components/scrollTop/ScrollTop";
import AllProject from "./pages/allProjects/AllProject";
import Signup from "./pages/registration/signup/Signup";
import Login from "./pages/registration/login/Login";
import StudentDashboard from "./pages/student/StudentDashboard";
import CollegeDashboard from "./pages/college/CollegeDashboard";

const App = () => {
  return (
    <div>
      <Router>
      <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/projectinfo" element={<ProjectInfo />} />
          <Route path="/allprojects" element={<AllProject />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/college-dashboard" element={<CollegeDashboard />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;