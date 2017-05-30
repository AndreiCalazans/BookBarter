import React from 'react';

export default function AlertMsg(props) {

    if(props.show) {
        return (
            <div className='alert_msg'>
                <span onClick={()=> { props.close()}} className="close_btn"><i className="fa fa-times" aria-hidden="true"></i></span>
                <p className="title">{props.msg}</p>
            </div>
        )
    } else {
        return null; 
    }
}
