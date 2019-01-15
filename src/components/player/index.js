import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PlayerTray from './tray'
// import CardBack from '../card-back'


const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 87px;
`

// <CardBack style={{ width: 60, height: 87 }} />
const Player = ({ style }) => {
  return (
    <Wrapper style={style}>
      <PlayerTray />
      <PlayerTray />
      <PlayerTray last />
    </Wrapper>
  )
}

Player.propTypes = {
  style: PropTypes.object
}

Player.defaultProps = {
  style: {}
}

export default Player
