import React, { useEffect, useState } from 'react';
import {Button, Alert} from 'reactstrap';

import axios from 'axios';


function Administration() {
    const [editStudent, setEditStudent] = useState(false);

    useEffect(() => {
        axios.put('https://international-school-sw.herokuapp.com/api/students/:id')
            .then((res) => {
                setEditStudent(res.data)
                console.log(res)
            }).catch(err => console.log(err))
    }, [])


    return (
        <>
                   
            <div>
                <Alert color="success">Welcome, please choose an administrative task below:</Alert>
              


                <Button color="danger">Delete Student</Button>

                <Button color="warning">Edit Student</Button>
            </div>
        </>
    )
}



export default Administration;