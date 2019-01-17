import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import Player from '../player';

const Desk = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Row = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 100%;

  ${props => props.center && css`
      justify-content: center;
  `}
  ${props => props.spaceBetween && css`
      justify-content: space-between;
  `}
`

const DeskOfPlayers = () => {
  return (
    <Fragment>
      <Desk>
        <Row center>
          <Player position={1} />
        </Row>
        <Row spaceBetween>
          <Player position={4} />
          <Player position={2} />
        </Row>
        <Row center>
          <Player position={3} />
        </Row>
      </Desk>
    </Fragment>
  )
}

export default DeskOfPlayers
