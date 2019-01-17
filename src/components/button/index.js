import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button`
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 4px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;

  &:focus {
    outline: 0;
    box-shadow: none;
  }

  ${props => props.disabled && css`
    cursor: not-allowed;
    opacity: 0.5;
  `}
`

const ControlBar = (props) => (
  <Button {...props}>{props.children}</Button>
)

export default ControlBar