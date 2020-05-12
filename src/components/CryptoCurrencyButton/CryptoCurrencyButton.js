import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import './CryptoCurrencyButton.css'
import { setActiveCurrency } from '../../engine/core/crypto/action';
import { Button, Row, Col } from 'reactstrap';

function CryptoCurrencyButton (props) {
    const { currency, rub, uah, usd } = props;
    const dispatch = useDispatch();

    const onClickHandler = useCallback(() => {
        dispatch(setActiveCurrency(currency))
    }, [currency, dispatch]);
    
    return(
        <>
            <Button className="currencyButton" 
                    onClick={onClickHandler}>
                        <Row>
                            <Col xs="4">
                                <div className="cryptoCurrencyImage">
                                <img src={require(`../../assets/images/${currency.toUpperCase()}.png`)} alt=''/>
                                </div>
                                <h3 className="cryptoCurrencyName">{currency.toUpperCase()}</h3>
                            </Col>
                            <Col xs="8">
                                <h3>UAH: {uah}</h3>
                                <h3>USD: {usd}</h3>
                                <h3>RUB: {rub}</h3>
                            </Col>
                        </Row>
            </Button>
                
        </>
    );
};

export default CryptoCurrencyButton;