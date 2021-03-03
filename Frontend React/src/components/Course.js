import React from "react"
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { useHistory } from 'react-router-dom';

const Course = ({course,update}) => {

    //to link the update button to update course page
    let history = useHistory();
    const redirect = () => {
        history.push('/update-course')
      }

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("Deleted successfully")
                update(id)
            },
            (error)=>{
                toast.error("Course could not be deleted")
            }
        )
    }
    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container>
                    <Button color="danger" onClick={()=>{
                        deleteCourse(course.id)
                    }}>Delete</Button>
                    <Button onClick={redirect} color="warning ml-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course