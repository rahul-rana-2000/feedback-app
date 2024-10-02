/* import React from 'react'

export default function FeedbackLIst() {
  return (
    <div>LIst</div>
  )
}
  */
/* import React from 'react'

function FeedbackLIst({ feedback }) {
    if (!feedback || feedback.length === 0) {
  return  <p> No Feedback Yet</p>
    }
    return 
    <div>LIst</div>
  
}

export default FeedbackLIst
*/
/* import FeedbackItem from './FeedbackItem'


function FeedbackLIst({ feedback }) {
    if (!feedback || feedback.length === 0) {
 return  <p> No Feedback Yet</p>
    }
    return (
    <div className='feedback-lIst'>
        {feedback.map((item) => ( 
            <h2>{item.rating}</h2>
            
        ))}

    </div>
    )
  
}

export default FeedbackLIst
*/



import FeedbackItem from './FeedbackItem'
import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../FeedbackContext'


function FeedbackLIst() {

const {feedback} = useContext(FeedbackContext)


    if (!feedback || feedback.length === 0) {
 return  <p> No Feedback Yet</p>
    }
    return (

  <div className='feedback-list'>
    <AnimatePresence>

      {feedback.map((item) => ( 

        <motion.div key={item.id}initial={{ opacity: 0 }}animate={{ opacity: 1 }}exit={{ opacity: 0 }} >

       <FeedbackItem key={item.id} item={item}  /> 
        
        </motion.div>
      ))}

      </AnimatePresence>

  </div>



  /*  <div className='feedback-list'>
        {feedback.map((item) => ( 

         <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} /> 
          
        ))}

    </div>*/

    )
}
// FeedbackLIst.propTypes = {
  // feedback: PropTypes.arrayOf(
    // PropTypes.shape({
      // id: PropTypes.number.isRequired,
      // text: PropTypes.string.isRequired,
      // rating: PropTypes.number.isRequired


    // })
  // ),
// }

export default FeedbackLIst

