import { combineReducers } from 'redux'
import { createAction, createReducer } from 'redux-act'

export const actions = {
  transferTrayData: createAction('transfer tray data'),
}

const gameReducer = createReducer({
  [actions.transferTrayData]: (state, action) => ({
    ...state,
    currentPlayerPositionInDrawing:
      action.currentPlayerPositionInDrawing ||
      state.currentPlayerPositionInDrawing,
    trays: {
      ...state.trays,
      [action.id]: {
        ...state.trays[action.id],
        ...action.payload
      }
    }
  })
}, {
  currentPlayerPositionInDrawing: 1,
  trays: {}
})

export default combineReducers({
  gameReducer
})