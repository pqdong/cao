import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import find from 'lodash/find'
import styled from 'styled-components'
import { actions } from '../../reducers'
import Button from '../button'

const Wrapper = styled.div`
  text-align: right;
  padding: 16px;
`

class ControlBar extends PureComponent {  
  componentDidUpdate(prevProps) {
    const { currentPlayerPositionInDrawing } = this.props

    if (currentPlayerPositionInDrawing &&
        currentPlayerPositionInDrawing !== prevProps.currentPlayerPositionInDrawing) {
      this.onDraw()
    }
  }

  getCurrentTrayToDraw = (trays = this.props.trays) => {
    const { currentPlayerPositionInDrawing } = this.props
    const currentTray = find(trays,
      tray =>
        !tray.drawed &&
        tray.position === currentPlayerPositionInDrawing
      )

    return currentTray
  }

  onDraw = () => {
    const currentTray = this.getCurrentTrayToDraw();

    if (currentTray) {
      const { dispatch } = this.props

      dispatch(
        actions.transferTrayData({
          id: currentTray.id,
          payload: {
            drawing: true
          }
        })
      )
    }
  }

  render() {
    const currentTray = this.getCurrentTrayToDraw() || {};

    return (
      <Wrapper>
        <Button
          disabled={currentTray.drawing === true}
          onClick={this.onDraw}
        >
          Draw
        </Button>
      </Wrapper>
    )
  }
}

export default connect(state => state.gameReducer)(ControlBar)