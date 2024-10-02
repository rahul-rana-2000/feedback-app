/* import React from 'react'

 function FeedbackItem() {
  return (
    <div className='card'>
    <div className='num-display'>10</div>
    <div className='text-display'> This is an example of a feedback item </div>

    </div>
  )
}

export default FeedbackItem
*/

/* import { useState } from 'react'

 function FeedbackItem() {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('This is an example of a feedback item')

  return (
    <div className='card'>
    <div className='num-display'>{rating}</div>
    <div className='text-display'>{text}</div>

    </div>
  
  )
}

export default FeedbackItem
*/

/* import { useState } from 'react'

 function FeedbackItem() {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('This is an example of a feedback item')
  
  const handleClick = () => {
    setRating(10)
  }

  return (
    <div className='card'>
    <div className='num-display'>{rating}</div>
    <div className='text-display'>{text}</div>
    <button onClick={handleClick}>Click</button>

    </div>
  
  )
}

export default FeedbackItem

*/

/* import { useState } from 'react'

 function FeedbackItem() {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('This is an example of a feedback item')
  
  const handleClick = () => {
    setRating((prev) => {
      console.log(prev)
      return prev + 1
    })
  }

  return (
    <div className='card'>
    <div className='num-display'>{rating}</div>
    <div className='text-display'>{text}</div>
    <button onClick={handleClick}>Click</button>

    </div>
  
  )
}

export default FeedbackItem

*/

/* import { useState } from 'react'

 function FeedbackItem() {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('This is an example of a feedback item')
  
  

  return (
    <div className='card'>
    <div className='num-display'>{rating}</div>
    <div className='text-display'>{text}</div>
    
    </div>
  
  )
}

export default FeedbackItem

*/



/* import Card from "./shared/Card"

function FeedbackItem({ item }) {
  return (
    <Card>
   <div className='card'>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </div>
   </Card>
  )
}

export default FeedbackItem
*/

/* import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"

function FeedbackItem({ item }) {
  return (
    <Card reverse={true}>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => console.log(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    
   </Card>
  )
}
 FeedbackItem.propTypes= {
  item:PropTypes.object.isRequired
 }
export default FeedbackItem
*/

/* import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"

function FeedbackItem({ item }) {

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => console.log(123)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    
   </Card>
  )
}
 FeedbackItem.propTypes= {
  item:PropTypes.object.isRequired
 }
export default FeedbackItem
*/

/* import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"

function FeedbackItem({ item }) {

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => console.log(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    
   </Card>
  )
}
 FeedbackItem.propTypes= {
  item:PropTypes.object.isRequired
 }
export default FeedbackItem
*/


import { FaTimes, FaEdit} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import { useContext } from 'react'
import FeedbackContext from '../FeedbackContext'


function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
 

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback (item.id)} className='close'> 
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(item)}
      className='edit'>
      <FaEdit color='purple' />
        
      </button>
      <div className='text-display'>{item.text}</div>
    
   </Card>
  )
}
 FeedbackItem.propTypes= {
  item:PropTypes.object.isRequired
 }
export default FeedbackItem









