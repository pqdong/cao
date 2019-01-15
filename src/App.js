import React, { Component, Fragment } from 'react';
import styled from 'styled-components'
import ControlBar from './components/control-bar'
import DeskOfPlayers from './components/desk-of-players'
import DeskOfCards from './components/desk-of-cards'
import './App.css';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

class App extends Component {
  render() {
    return (
      <Fragment>
        <ControlBar />
        <Wrapper>
          <DeskOfPlayers />
          <DeskOfCards />
        </Wrapper>
      </Fragment>
    );
  }
}

export default App;
