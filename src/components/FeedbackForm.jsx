/* import React from 'react'

function FeedbackForm() {
  return (
    <div>FORM</div>
  )
}

export default FeedbackForm

*/

 /* import Card from './shared/Card'
function FeedbackForm() {
    return(
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                <div className='input group'>
                    <input type='text' placeholder='Write a review' />
                    <button type='submit'>Send</button>

                </div>
                
            </form>
        </Card>
    )
}

export default FeedbackForm
*/



/* import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {
   const [text, setText] = useState('')
   const [btnDisabled, setBtnDisabled] = useState(true)
   const [message, setMessage] = useState('')


    const handleTextChange = (e) => {
        setText(e.target.value)
        
    
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim ().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)

        } else {
            setMessage(null)
            setBtnDisabled(false)

        }
    }
    return(
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                <div className='input-group'>
                    <input onChange={handleTextChange} type='text' placeholder='Write a review' value={text} />
                    <Button type='submit' isDisabled={btnDisabled} > Send   </Button>

                </div>

                {message && <div className='message'>{message}</div>}
                
            </form>
        </Card>
    )
}

export default FeedbackForm
*/

import { useContext, useState,useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../FeedbackContext'

function FeedbackForm() {
   const [text, setText] = useState('')
   const [rating, setRating] = useState(10)
   const [btnDisabled, setBtnDisabled] = useState(true)
   const [message, setMessage] = useState('')

   const {addFeedback, feedbackEdit, updateFeedback}= useContext(FeedbackContext)

useEffect(() => {
    if (feedbackEdit.edit === true) {
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
    }
},  [feedbackEdit])


    const handleTextChange = (e) => {
        setText(e.target.value)

       if (text === '') {

       setBtnDisabled(true)
        setMessage(null)
    
    }else if (text !== '' && text.trim ().length <= 10) {
        setMessage('Text must be at least 10 characters')
        setBtnDisabled(true)

    } else {
        setMessage(null)
        setBtnDisabled(false)}
    }

    
 const handleSubmit= (e) => {
            e.preventDefault() 

        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }

        if(feedbackEdit.edit === true) {
            updateFeedback(feedbackEdit.item.id, newFeedback)}
            else{addFeedback(newFeedback)}

         setText('')
        
        }
         }

   return (
        <Card>
            <form onSubmit={handleSubmit} >
                <h2>How would you rate your service with us?</h2>

                <RatingSelect select={(rating) => setRating(rating)} />
                <div className='input-group'>
                    <input onChange={handleTextChange} type='text' placeholder='Write a review' value={text} />
                    <Button type='submit' isDisabled={btnDisabled} > Send   </Button>

                </div>

                {message && <div className='message'>{message}</div>}
                
            </form>
        </Card>
    )
    }

    export default FeedbackForm



