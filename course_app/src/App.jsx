import Appbar from "./components/Appbar";
import AddCourses from "./components/AddCourses";
import Courses from "./components/Courses";
import Course from "./components/Course";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Front from "./Front";
import About from "./About";

//links to the different parts of the page
function App(){
 return (
    <div style={{margin:-7}}>
      <Router>
        <Appbar/>
          <Routes>
           {/*Different products*/}
          <Route path="/courses/:id" element={<Course/>}/>
            {/*product details*/}
          <Route path="/courses" element={<Courses/>}/>
            {/*Add products*/}
          <Route path="/addcourses" element={<AddCourses/>}/>
            {/*Landing page*/}
          <Route path="/" element={<Front/>}/>
          <Route path="/about" element={<About/>}/>
          </Routes>
        {/* <Bottomnav/> */}
      </Router>
    </div>
  )
}


export default App;
