import React from 'react';

function About(props) {

    return (
    <aside>
        {/* {props.img == '' || props.img == null ? 'https://via.placeholder.com/215' : {props.img}} } */}
        <img src={props.img} alt='blog logo' />
        <p>
            {props.about}
        </p>
    </aside>

    )
};

export default About