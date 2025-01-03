/*import PropTypes from 'prop-types'

function Card({ children, reverse = false }) {  
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? 'black' : 'white',
        color: reverse ? 'white' : 'black',
      }}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card
*/


import PropTypes from 'prop-types';

function Card({ children, reverse = false, activeClassName }) {  
  return (
    <div
      className={`card ${activeClassName || ''}`}  // Conditionally add 'active' class (or any other class passed)
      style={{
        backgroundColor: reverse ? 'black' : 'white',
        color: reverse ? 'white' : 'black',
      }}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  activeClassName: PropTypes.string, // It can be a string (like 'active') or undefined/null
};

export default Card;
