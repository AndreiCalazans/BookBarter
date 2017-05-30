import React from 'react';

export default function On_trade_description(props) {
    return (
       <div>
                <p className="sub_title"><b>{props.name}</b></p>
                <p className="sub_title"><b>Owner:</b> {props.createdBy}</p>
                <p className="sub_title"><b>With:</b> {props.requestedBy}</p>
                <p className="sub_title">Currently on Trade</p>
                {props.createdById == props.currentUser ? 
                
                    <div>
                    <button  onClick={() => {
                        props.handleDeleteOfTrade(props.id)
                        }}
                        >Finish Trade</button> 
                    </div>
                    :
                    <p className="sub_title"><strong>This book is with you</strong></p>
                    
                }
                
        </div>
    )
}