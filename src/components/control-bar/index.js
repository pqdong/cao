import React from 'react'
import styled from 'styled-components'
import Button from '../button'

const Wrapper = styled.div`
  text-align: right;
  padding: 16px;
`

const ControlBar = () => (
  <Wrapper>
    <Button>Draw</Button>
  </Wrapper>
)

export default ControlBar