import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 4px;
  background-color: #f5f5f5;
  border-color: #ccc;

  &:focus {
    outline: 0;
    box-shadow: none;
  }
`

const ControlBar = (props) => (
  <Button {...props}>{props.children}</Button>
)

export default ControlBar