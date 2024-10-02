/* import React from 'react'

function Header() {
  return (
    <div>Header
      component by Bhag Singh
    </div>
  )
}

export default Header
*/
/* import React from 'react'

function Header() {
  return (
    <header>

        <div className='container'>
            <h2>Feedback UI</h2>
        </div>

    </header>
    
  )
}

export default Header
*/

/* import React from 'react'

function Header(props) {
  return (
    <header>

        <div className='container'>
            <h2>{props.text}</h2>
        </div>

    </header>
    
  )
}

export default Header

*/

 /* import React from 'react'

function Header({ text }) {
  return (
    <header>

        <div className='container'>
            <h2>{text}</h2>
        </div>

    </header>
    
  )
}
Header.defaultProps = {
  text: 'Feedback UI',
}
export default Header

*/

/* import React from 'react'

function Header({ text }) {
  return (
    <header>

        <div className='container'>
            <h2>{text}</h2>
        </div>

    </header>
    
  )
}
Header.defaultProps = {
  text: 'Feedback UI',
}

Header.prototype= {
  text: 'PropsTypes.string',
}
export default Header

*/
/* import React from 'react'

function Header({ text }) {
  const headerStyle = {
    backgroundColor: 'pink',
    color: 'blue',

  }


return ( 

  <header style={headerStyle}>
    <div className='container'>
      <h2>{text}</h2>
    </div>
  </header>
)
}

Header.defaultProps = {
  text: 'Feedback UI',
}

export default Header
*/

/* import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
  color: textColor,

  }
  return (
    <header Style= {headerStyles} >
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

export default Header
*/

import React from 'react'

function Header({ text, bgColor, textColor }) { 

  const headerStyles = {
    backgroundColor: bgColor,
  color: textColor,

  }
   
  return (
    <header style={headerStyles} >

        <div className='container'>
            <h2>{text}</h2>
        </div>

    </header>
    
  )
}
Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'pink',
  textColor: 'blue',
}

Header.propTypes= {
  text: 'PropsTypes.string',
  bgColor: 'PropsTypes.string',
  textColor: 'PropsTypes.string',
  

}
export default Header
