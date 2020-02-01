// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
//
// export default function AboutStudent(props) {
//
//     const [isStudent, setStudent] = useState([]);
//
//     useEffect(() => {
//         fetch('https://international-school-sw.herokuapp.com/api/students/',
//             {
//                 method: "GET",
//                 Headers: {
//                     "X=Frame-Options": "SAMEORIGIN",
//                     "Content-Type": "application/json",
//                     "Accept": "application/html"
//                 }
//
//
//             }).then( res => res.json()).then((result) => {
//                 setStudent(result.name);
//                 console.log(result.name)
//
//         })
//
//             // .then(res => res.json()
//             //
//             //
//             //
//             //
//             // ).then((result) => {
//             //     setStudent(result.name)
//
//
//     }, []);
//
//
// return (
//     <>
//
//         {
//
//             isStudent.map( student => {
//                 console.log(student);
//                 return (
//                     <h1 key={student.id}> {student.name}, {student} </h1>
//
//
//                 );
//             })
//         }
//
//
//
//         }
//     </>
// );
// }
//

import React from 'react';

export default function AboutStudent() {
    return (
        <>
            {
                console.log('Hello')


            }
            <button>Click</button>

        </>


    )


}
