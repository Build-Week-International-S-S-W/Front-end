import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getStudents } from '../../../actions/students';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
// import { StudentsDataTable } from './DataTable';
import axios from 'axios';

import {
    Button,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const AboutStudents = (props) => {
    
    // const [activeIndex, setActiveIndex] = useState(0);
    // const [animating, setAnimating] = useState(false);
    // const [ students, setStudents] = useState(props.studentsList);

    useEffect(() => {
        props.getStudents();       
    }, []);

    // useEffect(() => {
    //     setStudents(props.studentsList)       
    // }, [props.studentsList]);

    // const next = () => {
    //     if (animating) return;
    //     const nextIndex = activeIndex === students.length - 1 ? 0 : activeIndex + 1;
    //     setActiveIndex(nextIndex);
    // };

    // const previous = () => {
    //     if (animating) return;
    //     const nextIndex = activeIndex === 0 ? students.length - 1 : activeIndex - 1;
    //     setActiveIndex(nextIndex);
    // };

    // const goToIndex = (newIndex) => {
    //     if (animating) return;
    //     setActiveIndex(newIndex);
    // };

    // const classmates = students.map((student) => {
    //    console.log(students);
    //     return (
    //         <CarouselItem
    //             className="custom-tag"
    //             tag="div"
    //             key={student.id}
    //             onExiting={() => setAnimating(true)}
    //             onExited={() => setAnimating(false)}
    //             unmountOnExit={() => setAnimating(true)}
    //         >
    //             <CarouselCaption
    //                 captionText={student.name}
    //             />
    //         </CarouselItem>
    //     );
    // });
    console.log('studetns infor from store>>>>>>>>>>>>>>>>',props.studentsList);
    return (
        <React.Fragment>
            {/* {props.studentsList.map( (student) => {
                return <div>
                    <h1>{student.name}</h1>
                </div>
            })} */}
            {/* <StudentsDataTable data={props.studentsList}/> */}
            <div className="btn">
                <Button color="success" onClick={(touched) => {
                    // console.log(classmates.map( fixed => fixed.valueOf()));
                    touched = (alert('Educell International network is being monitor!'));

                    window.location.href = "/add-students"}}>Add Student</Button>
            </div>
            <DataTable value={props.studentsList}>
              <Column field="name" header="Name" />
              <Column field="age" header="Age" />
              <Column field="grade" header="Grade" />
              <Column field="class" header="Class" />
              <Column field="background" header="Background" />
              <Column field="status" header="Status" />
              <Column field="special_needs" header="Special Needs" />
              <Column field="insurance" header="Insurance" />
              <Column field="birth_certificate" header="Birth Certificate" />
          </DataTable>
        </React.Fragment>          
    )
};

const mapStateToProps = (state) => {
    console.log(state.students)
    return{
        error:state.students.error,
        isLoading:state.students.isLoading,
        studentsList:state.students.students
    }
}

export default connect( mapStateToProps,{ getStudents })(AboutStudents);



   
        //      <style>        
        //         {
        //             `.custom-tag {
        //       max-width: 50%;

        //       height: 300px;

        //       background: black;
        //       font-size: 29px;

        //     }`
        //         }
        //     </style>

        //     <Carousel
        //         activeIndex={activeIndex}
        //         next={next}
        //         previous={previous}

        //     >
        //         <CarouselIndicators
        //             items={students}
        //             students={students}
        //             activeIndex={activeIndex}
        //             onClickHandler={goToIndex}
        //         />

        //         {classmates}
        //         <CarouselControl
        //             direction="prev"
        //             directionText="Previous"
        //             onClickHandler={previous}

        //         />
        //         <CarouselControl
        //             direction="next"
        //             directionText="Next"
        //             onClickHandler={next}
        //         />

        //     </Carousel >
