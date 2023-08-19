import Appbar from "./components/Appbar";
// import Bottomnav from "./components/Bottomnav";
// import LoginCard from "./components/LoginCard";
// import SignupCard from "./components/SignupCard";
import AddCourses from "./components/AddCourses";
import Courses from "./components/Courses";
import Course from "./components/Course";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Front from "./Front";
import About from "./About";

function App(){
 return (
    <div style={{margin:-7}}>
      <Router>
        <Appbar/>
          <Routes>
          <Route path="/courses/:id" element={<Course/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/addcourses" element={<AddCourses/>}/>
          <Route path="/" element={<Front/>}/>
          <Route path="/about" element={<About/>}/>
          </Routes>
        {/* <Bottomnav/> */}
      </Router>
    </div>
  )
}


export default App;