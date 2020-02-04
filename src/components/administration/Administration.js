import React, {useState} from 'react';
import {Button, Alert} from 'reactstrap';



const  Administration = () => {
    const [editStudent, setEditStudent] = useState(false)
    const [deleteStudent, setDeletStudent] = useState(false)
    const clickHandler = () => {
        setDeletStudent(deleteStudent.valueOf)
        console.log(deleteStudent)

    }




    // if(!editStudent) {
    //     return (
    //         <div>
    //             <p>Loading...</p>
    //         </div>
    //     )
    // }

    return (
        <>

            <div>
                <Alert color="success">Welcome, please choose an administrative task below:</Alert>



                <Button color="danger" onClick={clickHandler}>Delete Student</Button>

                <Button color="warning" type="submit" onClick={setEditStudent}>Edit Student</Button>

            </div>

        </>
    )
}



export default Administration;