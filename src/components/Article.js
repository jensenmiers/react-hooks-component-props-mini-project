import React from 'react';

function Article (prop) {

    return (
        <>
        <h3> {prop.title} </h3>
        <small>
           {prop.date}
        </small>
        <p>
           {prop.preview}
        </p>
        </>
    )
};

export default Article