import React from 'react';

const Blog = () => {
    return (
        <div className='absolute'>
           <div> <h1 className='font-bold'>Q:Tell us the differences between uncontrolled and controlled components.</h1>
            <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p></div>
            <br />
           <div> <h1 className='font-bold'>Q:How to validate React props using PropTypes</h1> 
           <p>React is a JavaScript library used for creating interactive web frontend applications. It is one of the most popular libraries because of its easy-to-use API.

We combine components into an app by passing data from parent components to child components. To do this, we pass data with props. Props are like HTML attributes, but they can contain dynamic data.

A parent component passes props down to child components. And child components receive them. We can pass any data as props. Therefore, we need a way to validate their data type so that the child component gets what they expect.</p>
           </div>
           <br />
           <div>
<h1 className='font-bold'>Q:Tell us the difference between nodejs and express js.
</h1>
<p>NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.</p>
           </div>
           <br />
           <div>
<h1 className='font-bold'>Q:What is a custom hook, and why will you create a custom hook?
</h1>
<p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. </p>
           </div>
        </div>
    );
};

export default Blog;