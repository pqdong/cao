import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PlayerTray from './tray'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 87px;
`

const Player = ({ position, style }) => {
  return (
    <Wrapper style={style}>
      <PlayerTray position={position} />
      <PlayerTray position={position} />
      <PlayerTray position={position} last />
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
