import React, { useCallback }  from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Button } from 'reactstrap'; 

import './CryptoCurrencySelect.css'
import { setActiveCurrencyExchange } from '../../engine/core/crypto/action';


function CryptoCurrencySelect () {
    
    const dispatch = useDispatch();
    
    const onClickHandler = useCallback((ev) => {
        const activeCurrency = ev.target.textContent.toLowerCase();
        dispatch(setActiveCurrencyExchange(activeCurrency))
    }, [dispatch]);
    
    return(
        <>
            <Row className="currencySelect">
                <Col xs="4">
                    <Button onClick={onClickHandler} className="currencySelectButton">
                        <h3>UAH</h3>
                    </Button>
                </Col>
                <Col xs="4">
                    <Button onClick={onClickHandler} className="currencySelectButton">
                        <h3>USD</h3>
                    </Button>
                </Col>
                <Col xs="4">
                    <Button onClick={onClickHandler} className="currencySelectButton">
                        <h3>RUB</h3>
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export default CryptoCurrencySelect;