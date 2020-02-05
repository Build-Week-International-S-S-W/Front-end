import React, { useState, useEffect } from 'react';
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
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [students, setStudents] = useState([]);
    const handleSubmit = (e) => {
        window.location.href='/add-students';
    }

    useEffect(() => {
        axios.get('https://international-school-sw.herokuapp.com/api/students')
            .then(res => {
                setStudents(res.data)
                // console.log(res.data)
            }
            ).catch(err => console.log(err))
    }, []);



    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === students.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? students.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const classmates = students.map((student) => {


        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                key={student.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                unmountOnExit={() => setAnimating(true)}
            >
                <CarouselCaption

                    captionText={student.name}

                />



            </CarouselItem>



        );

    });

    return (

        <div>
             <style>
                {
                    `.custom-tag {
              max-width: 50%;

              height: 300px;

              background: black;
              font-size: 29px;

            }`
                }
            </style>

            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}

            >
                <CarouselIndicators
                    items={students}
                    students={students}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />

                {classmates}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}

                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />

            </Carousel >

            <div className="btn">
                <Button color="success" onClick={(touched) => {
                    console.log(classmates.map( fixed => fixed.valueOf()));
                    touched = (alert('Educell International network is being monitor!'));

                    window.location.href = "/add-students"}}>Add Student</Button>
            </div>



        </div>
    )
};

export default AboutStudents;