import React, {useEffect} from "react"
import {Jumbotron, Container, Button} from "reactstrap"

const Home = () => {

    useEffect(() => {
        document.title="Home";
    },[])
    return (
        <div>
            <Jumbotron className="text-center">
                <h1>Course Management Tool</h1>
                <p>Here is a course Management Tool which can be used to add and view the courses. Keep checking for more updates</p>
                <Container>
                    <Button color="primary" outline>
                        Start Using
                    </Button>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home;