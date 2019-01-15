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
  padding: 30px 170px;

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
          <Player />
        </Row>
        <Row spaceBetween>
          <Player />
          <Player />
        </Row>
        <Row center>
          <Player />
        </Row>
      </Desk>
    </Fragment>
  )
}

export default DeskOfPlayers
