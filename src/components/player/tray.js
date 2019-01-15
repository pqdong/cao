import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Tray = styled.div`
  width: 60px;
  height: 87px;
  border: 1px solid #ccc;
  margin-right: 4px;
  border-radius: 4px;

  ${props => props.last && css`
    margin-right: 0;
  `}
`

const PlayerTray = (props) => <Tray {...props} />

Tray.propTypes = {
  style: PropTypes.object
}

Tray.defaultProps = {
  style: {
    
  }
}

export default PlayerTray