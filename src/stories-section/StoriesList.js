import React, {useState, useEffect} from 'react';
import {Row,Button} from 'react-bootstrap';
import StoryCard from './StoryCard'

const StoriesList = props => {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/stories").then(res => res.json()).then(data => setStories(data))
      }, []);
      
      const list = stories.map( (story) => (
          <StoryCard 
           key={story.id}
           quote={story.quote}
           description={story.description} 
           isTextRight={story.isTextRight}
           id={story.id}
            />
      ))
    return (
        <React.Fragment>
            <Row>
              {list}
            </Row>
            <Row>
            <Button style={{backgroundColor:'#cdebf9', color:'#000', borderColor:'#cdebf9'}} size="lg" block>More news</Button> 
            </Row>
        </React.Fragment>
    )
}

export default StoriesList
