import React, {useState} from 'react';
import {Button, Alert} from 'reactstrap';



const  Administration = () => {
    const [editStudent, setEditStudent] = useState({})




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



                <Button color="danger">Delete Student</Button>

                <Button color="warning" type="submit" onClick={setEditStudent}>Edit Student</Button>

            </div>

        </>
    )
}



export default Administration;