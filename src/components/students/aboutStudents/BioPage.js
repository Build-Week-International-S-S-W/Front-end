import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getStudents } from '../../../actions/students';
import {DataTable} from 'primereact/datatable';
// import {Button} from 'primereact/button';
import {Button} from 'reactstrap';
import {Column} from 'primereact/column';
import {Redirect} from 'react-router-dom';
import './biostyles.scss'


const AboutStudents = (props) => {        
    const paginatorLeft = <Button icon="pi pi-refresh"/>;
    const paginatorRight = <Button icon="pi pi-cloud-upload"/>;
    useEffect(() => {
        props.getStudents();       
    }, []);

    const addStudentsHandler = () => {
        return <Redirect to="/add-students" />        
    }

    return (
        <React.Fragment>
            <Button onClick={() => addStudentsHandler}>Add Student</Button>        
            <DataTable value={props.studentsList}
                       sortMode="multiple"
                       paginator={true} 
                       paginatorLeft={paginatorLeft} 
                       paginatorRight={paginatorRight} 
                       rows={5} 
                       rowsPerPageOptions={[5,10,20]}>
              <Column field="name" header="Name" sortable={true} filter={true}/>
              <Column field="age" header="Age" sortable={true} filter={true}/>
              <Column field="grade" header="Grade" sortable={true} filter={true}/>
              <Column field="class" header="Class" sortable={true} filter={true}/>
              <Column field="background" header="Background" sortable={true} filter={true} />
              <Column field="status" header="Status" sortable={true} filter={true}/>
              <Column field="special_needs" header="Special Needs" sortable={true} filter={true}/>
              <Column field="insurance" header="Insurance" sortable={true} filter={true}/>
              <Column field="birth_certificate" header="Birth Certificate" sortable={true} filter={true}/>
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
