import React from 'react'
import styled from 'styled-components'
import CardBack from '../card-back'

const NUMBER_OF_CARDS = 12

const Wrapper = styled.div`
  position: relative;
  width: 176px;
`
const Card = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 100px;
  height: 145px;
  overflow: hidden;
`

const DeskOfCards = () => {
  const cards = []

  for (let i = 0; i < NUMBER_OF_CARDS;i ++) {
    const cardPosTop = 16 + i
    const cardPosRight = 16 + i

    cards.push(
      <Card key={i} style={{ top: cardPosTop, right: cardPosRight }}>
        <CardBack style={{ width: 100, height: 145 }} />
      </Card>
    )
  }

  return <Wrapper>{cards}</Wrapper>
}

export default DeskOfCards