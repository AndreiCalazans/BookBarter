import React from 'react';
import BookHolder from './stateless/BookHolder';


class Books extends React.Component {
    render() {
        return (
            <div>
                <h1>Books section</h1>
              <hr/>
                    <div className="container book_container">
                        <BookHolder name='Harry Pot' img_url='http://4.bp.blogspot.com/-yUwWH6kyx34/VA3LIqhicCI/AAAAAAAAAJk/FOXQfKpZCKs/s1600/percylightning.jpg' createdBy='Andrei' rating={5} />
                        <BookHolder name='Harry Pot' img_url='http://4.bp.blogspot.com/-yUwWH6kyx34/VA3LIqhicCI/AAAAAAAAAJk/FOXQfKpZCKs/s1600/percylightning.jpg' createdBy='Andrei' rating={5} />
                        <BookHolder name='Harry Pot' img_url='http://4.bp.blogspot.com/-yUwWH6kyx34/VA3LIqhicCI/AAAAAAAAAJk/FOXQfKpZCKs/s1600/percylightning.jpg' createdBy='Andrei' rating={5} />
                        <BookHolder name='Harry Pot' img_url='http://4.bp.blogspot.com/-yUwWH6kyx34/VA3LIqhicCI/AAAAAAAAAJk/FOXQfKpZCKs/s1600/percylightning.jpg' createdBy='Andrei' rating={5} />
                        <BookHolder name='Harry Pot' img_url='http://4.bp.blogspot.com/-yUwWH6kyx34/VA3LIqhicCI/AAAAAAAAAJk/FOXQfKpZCKs/s1600/percylightning.jpg' createdBy='Andrei' rating={5} />
                        <BookHolder name='Harry Pot' img_url='http://4.bp.blogspot.com/-yUwWH6kyx34/VA3LIqhicCI/AAAAAAAAAJk/FOXQfKpZCKs/s1600/percylightning.jpg' createdBy='Andrei' rating={5} />
                        <BookHolder name='Harry Pot' img_url='http://4.bp.blogspot.com/-yUwWH6kyx34/VA3LIqhicCI/AAAAAAAAAJk/FOXQfKpZCKs/s1600/percylightning.jpg' createdBy='Andrei' rating={5} />
                    
                    </div>
                
            
            </div>
        )
    }
}
    
export default Books;