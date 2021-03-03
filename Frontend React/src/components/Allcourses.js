import React, {useState, useEffect} from 'react'
import Course from './Course'
import base_url from "./../api/bootapi";
import axios  from "axios";
import { toast } from 'react-toastify';

const Allcourse = () =>{

    const  [courses,setCourses] = useState([])

    useEffect(() => {
            document.title="All Courses";
    },[])

    const updateCourses = (id) => {
        setCourses(courses.filter((c)=> c.id != id))
    }

    //function to call server
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //success
                console.log(response)
                toast.success("courses has been loaded",{
                    position:"bottom-center"
                })
                setCourses(response.data)
            },
            (error)=>{
                //for error
                console.log(console.error());
                toast.error("something went wrong",{
                    position:"bottom-center"
                });
                
                
            }
        )
    }


    //calling loading course function
    useEffect(()=>{
        getAllCoursesFromServer();
    },[]) 

    

    return(
        <div>
            <h1>All courses</h1>
            <p>List of courses</p>
                {
                    courses.length>0? courses.map((item)=><Course key={item.id} course={item} update={updateCourses}/>) : "No courses"
                }
        </div>
    )

}

export default Allcourse;