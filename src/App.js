import React from 'react';
import { Provider } from 'react-redux';
import { store } from './engine/init/store';
import { Container, Row, Col } from 'reactstrap';

import './App.css';
import CryptoCurrencyTable from './components/CryptoCurrencyTable/CtyptoCurrencyTable';
import CryptoCurrencyCalc from './components/CryptoCurrencyCalc/CryptoCurrencyCalc';

function App() {
  return (
    <>
        <Provider store={store}>
          <Container>
            <Row>
              <Col>
                <CryptoCurrencyTable />
              </Col>
            </Row>
          </Container>
          <Container>
              <CryptoCurrencyCalc />
          </Container>
        </Provider>
    </>
  );
}



export default App;
