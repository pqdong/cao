import React from 'react'
import PropTypes from 'prop-types'
import cardBackImage from '../../assets/images/card-back.svg'

const CardBack = ({ style }) => (
  <img src={cardBackImage} alt="Card back" style={style} />
)

CardBack.propTypes = {
  style: PropTypes.object
}

CardBack.defaultProps = {
  style: {}
}

export default CardBack