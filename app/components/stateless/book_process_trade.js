import React from 'react';

export default function Book_process_description(props) {
    return (
       <div>
            <p className="sub_title"><b>{props.name}</b></p>
                <p className="sub_title"><b>Owner:</b> {props.createdBy}</p>
                <p className="sub_title"><b>Trade request by:</b> {props.requestedBy}</p>
                <p className="sub_title"><b>Status:</b> in process</p>
                {props.createdById == props.currentUser ? 
                
                    <div>
                    <button onClick={() => {
                        props.handleAcceptTrade(props.id)}}
                        >Accept</button> 
                    </div>
                    :
                    <p className="sub_title"><strong>Waiting for response</strong></p>
                    
                }
                
        </div>
    )
}