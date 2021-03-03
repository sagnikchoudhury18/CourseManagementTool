

import {Button, Container, Row, Col} from "reactstrap"
import {ToastContainer, toast} from "react-toastify"
import Home from "./components/Home"
import Course from "./components/Course"
import Allcourses from "./components/Allcourses"
import AddCourse from "./components/AddCourse"
import Header from "./components/Header"
import Menus from "./components/Menus"
import UpdateCourse from "./components/UpdateCourse"

import {BrowserRouter as Router, Route} from "react-router-dom"
import Allcourse from "./components/Allcourses"

function App() {
  
  const btnHandle = () =>{
    toast.success("This is my first message")
  }
  
  return (
  <div>
    <Router>
    <ToastContainer/>
    <Header/>
     
     <Container>
       <Row>
         <Col md={4}>
           <Menus/>
         </Col>
         <Col md={8}>
            <Route path="/" component={Home} exact/>
            <Route path="/add-course" component={AddCourse} exact/>
            <Route path="/view-courses" component={Allcourses} exact/>
            <Route path="/update-course" component={UpdateCourse} exact/>
         </Col>
       </Row>
     </Container>
    </Router>
  </div>
  );
}

export default App;
