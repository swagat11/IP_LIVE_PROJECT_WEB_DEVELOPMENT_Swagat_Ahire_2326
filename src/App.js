import React from 'react';
import SimpleForm from './SimpleForm';
import './App.css';


const App = (props) => {
    return (
      <>
      <div className = "header">
        <h2>My Personal Site!!!</h2>
      </div>
      
      <div className = "main">
      <div className ="nav" >
          <h2>My Navigation</h2>
          <h4>HOME</h4>
          <h3>CONTACT</h3>
          <h4>ABOUT</h4>
        </div>
        <div className ="content">
          <div  >
            <h1>Introduction to my Site.....</h1>
            <p>Since the beginning of the internet, millions and millions and millions of blogs have been created.
            <br/>Many have died due to lost interest or their owners giving up on the idea,
            <br/>while others have thrived and continue to grow,making money and earning their owners steady income.
            <br/>It’s a constant evolution of content that keeps people coming back for more,
            especially if these blogs <br/>contact highly resourceful material that people find useful and interesting</p>
            <p>Each example listed in this blog post are all different in some way and all bring something unique to <br/> their readers & subscribers.
            I want to show you what is possible and how you can take inspiration from <br/>them and create an awesome blog of your own.</p>
            <p>One of my favourite type of Blog is the “tech blog”.Now this isn’t something new to blog about,<br/>
            as Tech bloggers have been blogging about technology news and gadget reviews in detail online since the<br/> beginning of the internet,
            But because it’s such a vast niche, you could carve out yourself really good angle<br/> within the tech blog sphere.
            <br/><br/>The trick is to have your own take on tech and don’t just follow the trend. One area which hasn’t really <br/>been covered specifically is eco tech,
            so something to think about. <br/>Maybe a blog specifically covering tech aimed at becoming more environmentally<br/> conscious.</p>
          </div>
        </div>
      </div>
      
      
      <div className = "bot">
        
          <SimpleForm></SimpleForm>
        </div>      
       
        
         
      </>
    )
}

export default App;