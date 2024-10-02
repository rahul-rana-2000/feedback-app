
/* function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}


/*function App() {
  return<h1> hello from the app component</h1>
}
export default App
*/

/* function App() {
  return(
    <div>
    <h1>My App</h1>
    <p>hello</p>
    </div>

  )
}
export default App
*/

/* <div className='container'>
  <h1>My App </h1>
  <p>hello</p>
</div>
*/
/* import React from "react";

function App() {
  return React.createElement(
'div',
    {className: 'container'},
     React.createElement('h1', {}, 'My App')

  );
}

export default App
*/  


/*function App() {
  return (

    
    <div className='container'>
      <h1>My App</h1>
      
    </div>
    
  )
}

export default App
*/
  


/* function App () {
  const title='Blog Post'
  const body= 'This is my blog post'

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
    </div>
  )
}

export default App
*/


/* function App() {
  const title='Blog Post'
  const body='This is my blog post'
  const comments = [
    {id:1, text: 'comment one'},
    {id:2, text: 'comment two'},
    {id:3, text: 'comment three'},



  ]


return (
  <div className="container">
    <h1>{title.toLocaleUpperCase()}</h1>
    <p>{body}</p>

    <div className="comments">
      <h3>comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
        <li>{comment.text}</li>
       )) }
      </ul>
    </div>


  </div>

)
}

export default App


*/

/*

function App () {
  const title= 'Blog Post'
  const body='This is my blog post'
  const comments = [
    {id:1, text: 'Comment one'},
    {id:2, text: 'Comment two'},
    {id:3, text: 'Comment three'}
  ]
  const loading = false
  const showComments= true

  const commentBlock = (
    <div className='comments'>
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment,index) => (
          <li key={index}>{comment.text}</li>

        ))}
      </ul>
    </div>

  )
  return (
    <div className='container'>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
      
      {showComments && commentBlock}
    </div>
  )
}

export default App
*/


/* import Header from './components/Header'  


function App() {
  return (
<>
    <Header />
    <div className='container'>
      <h1>My App</h1>
      
    </div>
    </>
  )
}

export default App
  */


/* import Header from './components/Header'  


function App() {
  return (
<>
    <Header text='Hello World'/>
    <div className='container'>
      <h1>My App</h1>
      
    </div>
    </>
  )
}

export default App
*/

/* import Header from './components/Header'  


function App() {
  return (
<>
    <Header text={true} />
    <div className='container'>
      <h1>My App</h1>
      
    </div>
    </>
  )
}

export default App
  
  */

/* import Header from './components/Header'  


function App() {
  return (
<>
<Header bgColor='pink' textColor='blue'/>
    <div className='container'>
      <h1>My App</h1>
      
    </div>
    </>
  )
}

export default App
*/

/* import Header from './components/Header'  
import FeedbackItem from './components/FeedbackItem'


function App() {
  return (

<>

<Header />
    <div className='container'>
      <FeedbackItem />
      
    </div>
    </>
  )
}

export default App
*/
/* 
import { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './FeedbackData'
import FeedbackLIst from './components/FeedbackLIst'


function App () {
  const [feedback, setFeedback] = useState(FeedbackData)

const deleteFeedback= (id) => {
  if (window.confirm('Are you sure you want to delete?')){
    setFeedback(feedback.filter((item) => item.id !== id))
  }
}
  return(
    <>

<Header />
    <div className='container'>
      <FeedbackLIst feedback={feedback} handleDelete={deleteFeedback} />

      
    </div>
    </>
  )
}

export default App

  */



import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'

import Header from './components/Header'

import FeedbackLIst from './components/FeedbackLIst'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './Pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import Card from './components/shared/Card'
import Post from './components/Post'
import { FeedbackProvider } from './FeedbackContext'


function App() {
  // const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <FeedbackProvider>
  <Router>
  <Header />
  <div className='container'>
    <Routes>
      

    {/* <Route exact path='/'> */}
 <Route exact path='/' element={

 <>
 <FeedbackForm  />
    
    <FeedbackStats />
    <FeedbackLIst />

    {/* <Route path='/about'>This is the about route</Route> */}

    </>

 }>
</Route>





   <Route path='/about' Component={AboutPage} />
   <Route path='/post/*' element={<Post />} />


   </Routes>
   <Card>
        <NavLink to='/' activeClassName='active'>
        Home 
        </NavLink>
        <NavLink to='/about' activeClassName='active'>
        About 
        </NavLink>
      </Card>



   <AboutIconLink />

  </div>
  </Router>

  </FeedbackProvider>
  )
}

export default App
