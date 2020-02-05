import React, {useState} from 'react';
import {Button, Alert} from 'reactstrap';



const  Administration = () => {
    const [editStudent, setEditStudent] = useState(false)
    const [deleteStudent, setDeletStudent] = useState(false)

    const deleteHandler = () => {
        
        console.log(deleteStudent)

    }

    const editHandler = () => {

        console.log(editStudent)
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

                <Alert color="success">Welcome, please choose an administrative task below:</Alert>
            <div className="admin-modify-btn btn">



                <Button color="danger" onClick={deleteHandler}>Delete Student</Button>

                <Button color="warning" type="submit" onClick={editHandler}>Edit Student</Button>

            </div>

        </>
    )
}



export default Administration;