import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Motion, spring, presets } from 'react-motion'
import find from 'lodash/find'
import values from 'lodash/values'
import styled from 'styled-components'
import { actions } from '../../reducers'
import CardBack from '../card-back'

const Wrapper = styled.div`
  position: relative;
  width: 176px;
`
const Card = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 60px;
  height: 87px;
  overflow: hidden;
`

class DeskOfCards extends PureComponent {
  getDrawingTray = () => {
    const { currentPlayerPositionInDrawing, trays } = this.props
    const drawingTray = find(trays, tray => 
      tray.drawing === true &&
      !tray.drawed &&
      tray.position === currentPlayerPositionInDrawing
    )

    return drawingTray
  }

  drawingCardHasFinished = () => {
    const drawingTray = this.getDrawingTray();

    if (drawingTray) {
      const { dispatch, currentPlayerPositionInDrawing } = this.props
      let finalCurrentPlayerPositionInDrawing = currentPlayerPositionInDrawing + 1

      if (finalCurrentPlayerPositionInDrawing > 4) {
        finalCurrentPlayerPositionInDrawing = 1
      }

      dispatch(
        actions.transferTrayData({
          id: drawingTray.id,
          currentPlayerPositionInDrawing: finalCurrentPlayerPositionInDrawing,
          payload: {
            drawing: false,
            drawed: true
          }
        })
      )
    }
  }

  render() {
    const { arrTrays } = this.props
    const arrTraysLength = arrTrays.length
    const arrTraysLastIndex = arrTraysLength - 1;

    return (
      <Wrapper>
        {arrTrays.map((tray, index) => {
          const isDrawing = tray.drawing === true
          const isDrawed = tray.drawed === true

          if (!isDrawed) {
            const finalIndex = arrTraysLastIndex - index
            const initialPosTop = finalIndex + 63
            const initialPosRight = finalIndex + 16
            const zIndex = finalIndex
            let drawingCardSpringX
            let drawingCardSpringY

            drawingCardSpringX = document.documentElement.clientWidth - tray.left - initialPosRight - 60
            drawingCardSpringY = tray.top - initialPosTop

            return (
              <Motion
                key={tray.id + index}
                onRest={this.drawingCardHasFinished}
                style={{
                  x: spring(isDrawing ? drawingCardSpringX : 0, presets.gentle),
                  y: spring(isDrawing ? drawingCardSpringY : 0, presets.gentle)
                }}
              >
                {value => (
                  <Card
                    style={{
                      position: 'fixed',
                      top: initialPosTop,
                      right: initialPosRight,
                      transform: `translate3d(-${value.x}px, ${value.y}px, 0)`,
                      zIndex
                    }}
                  >
                    <CardBack style={{ width: 60, height: 87 }} />
                  </Card>
                )}
              </Motion>
            )
          }

          return null
        })}
      </Wrapper>
    )
  }
}

export default connect(state => {
  return {
    ...state.gameReducer,
    arrTrays: values(state.gameReducer.trays)
  }
})(DeskOfCards)