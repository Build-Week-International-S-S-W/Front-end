import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../../assests/css/_schoolConfig.scss';
import './biostyles.scss';
import {Button, Card, CardBody, CardTitle, CardText} from "reactstrap";

export default function AboutStudents() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('https://international-school-sw.herokuapp.com/api/students')
            .then(res => {
                setStudents(res.data);
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <>
        <div className="current-student">
            {
                students.map(student => {
                    return <Card className="add-student">

                        <CardTitle>{student.name}</CardTitle>
                            <CardBody>
                                
                                <CardText>{student.id} Recent Visit</CardText>
                            </CardBody>


                    </Card>
                })
            }

        </div>
        <div className="btn">
         <Button color="success" onClick={() => window.location.href = "/add-students"}>Add Student</Button>
         </div>


        </>
    );
}
