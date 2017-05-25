import React from 'react';

export default function AlertMsg(props) {

    if(props.show) {
        return (
            <div className='alert_msg'>
                <p className="title">{props.msg}</p>
            </div>
        )
    } else {
        return null; 
    }
}
