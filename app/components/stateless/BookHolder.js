import React from 'react';
import Book_description from './book_description';
import Book_process_description from './book_process_trade';
import On_trade_description from './on_trade_description';
export default function BookHolder(props) {

    return (
        <div className='book_holder'>
            <div className='img_holder'>
                {/*to show or not the delete btn if for trade comp not show*/}
                {props.type != 'trade' ? 
                    (props.currentUser == props.createdById  ? 
                    <div  
                    onClick={() => { props.delete(props.id)}}
                    className='delete'>
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </div>:
                    null )
                    :
                    null
                }
                
                <img className='img-responsive' src={props.img_url || "https://getuikit.com/v2/docs/images/placeholder_600x400.svg"} alt={props.name}/>
            </div>
            
            {props.type == 'trade' ?
                
                (props.onTrade ? 
                    <On_trade_description {...props} />
                    :
                    <Book_process_description {...props} />
                )
                
                :

                <Book_description {...props}/>
            }

               
                
            
        </div>
    )
}