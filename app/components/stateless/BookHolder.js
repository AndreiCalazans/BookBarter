import React from 'react';

export default function BookHolder(props) {
    return (
        <div className='container book_holder'>
            <div>
                <img className='img-responsive' src={props.img_url} alt={props.name}/>
            </div>
            <div>
                <p className="sub_title">{props.name}</p>
                <p className="sub_title">posted by: {props.createdBy}</p>
                <p className="sub_title">rating: {props.rating} of 5</p>
                <button>Request trade btn</button>
            </div>
        </div>
    )
}