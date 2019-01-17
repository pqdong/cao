import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import uniqueId from 'lodash/uniqueId'
import { actions } from '../../reducers'
import CardBack from '../card-back'

const Tray = styled.div`
  width: 60px;
  height: 87px;
  border: 1px solid #ccc;
  margin-right: 4px;
  border-radius: 4px;

  ${props => props.last && css`
    margin-right: 0;
  `}

  ${props => props.hasCard && css`
    border: 0;
    border-radius: 0;
  `}
`

class PlayerTray extends PureComponent {
  constructor(props) {
    super(props)

    this.id = `playerTray${uniqueId()}`
  }

  componentDidMount() {
    this.$ele = document.getElementById(this.id)
    this.transferData()
  }

  // componentDidUpdate(prevProps) {
  //   const tray = this.get() || {}
  //   const prevTray = this.get(prevProps.trays)

  //   if (tray.drawed === true && tray.drawed !== prevTray.drawed) {
  //     const { dispatch } = this.props

  //     dispatch(actions.transferTrayData({
  //       id: this.id,
  //       payload: {
  //         drawing: true
  //       }
  //     }))
  //   }
  // }

  get = (trays = this.props.trays) => {
    return trays[this.id]
  }

  transferData = () => {
    const { dispatch, position } = this.props
    const rect = this.getBoundingClientRect()

    if (rect) {
      dispatch(actions.transferTrayData({
        id: this.id,
        payload: {
          id: this.id,
          bottom: rect.bottom,
          height: rect.height,
          left: rect.left,
          right: rect.right,
          top: rect.top,
          width: rect.width,
          x: rect.x,
          y: rect.y,
          position
        }
      }))
    }
  }

  getBoundingClientRect() {
    if (this.$ele) {
      return this.$ele.getBoundingClientRect()
    }

    return null
  }

  render() {
    const tray = this.get() || {}
    
    return (
      <Tray
        id={this.id}
        hasCard={tray.drawed}
        {...this.props}
      >
        {tray.drawed && (
          <CardBack style={{ width: 60, height: 87 }} />
        )}
      </Tray>
    )
  }
}

Tray.propTypes = {
  style: PropTypes.object
}

Tray.defaultProps = {
  style: {}
}

export default connect(state => state.gameReducer)(PlayerTray)