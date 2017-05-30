import React from 'react';

export default function BookHolder(props) {
    return (
        <div className='container book_holder'>
            <div className='img_holder'>
                {props.currentUser == props.createdById  ? 
                    <div  
                    onClick={() => { props.delete(props.id)}}
                    className='delete'>
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </div>:
                    null
                }
                <img className='img-responsive' src={props.img_url || "https://getuikit.com/v2/docs/images/placeholder_600x400.svg"} alt={props.name}/>
            </div>
            <div>
                <p className="sub_title">{props.name}</p>
                <p className="sub_title">posted by: {props.createdBy}</p>
                <p className="sub_title">rating: {props.rating} of 5</p>
                {props.onTrade ? 
                    <p className='highlighted'>Currently on Trade</p>:
                    
                    <button>Request trade btn</button>
                    }
                
            </div>
        </div>
    )
}