import {useEffect} from 'react'
import {useCoursesContext} from "../hooks/useCoursesContext"
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { IconName } from 'phosphor-react';

//components
import CourseDetails from '../components/CourseDetails'
import CourseForm from '../components/CourseForm'


const Home = () => {
    const {courses, dispatch} = useCoursesContext()

    useEffect(() => {
        const fetchCourses = async () =>{
            const response = await fetch('/api/courses')
            const json = await response.json()

            if (response.ok){
               dispatch({type: 'SET_COURSES', payload: json})

            }

        }
        fetchCourses()
    }, )
    
    return (<>
    <Navbar/>
        <div className="home">
            

            <CourseForm/>
            <br/>
            <div className="courses">
                {courses && courses.map((course) => (
                    <CourseDetails key={course._id} course={course}/>

                ))}

            </div>
            
            
        </div>
</>
    )
}
export default Home