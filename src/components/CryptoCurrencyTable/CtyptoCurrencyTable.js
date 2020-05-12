import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';


import CryptoCurrencyButton from '../CryptoCurrencyButton/CryptoCurrencyButton';
import { activeCryptoCurrencyInfoSelector } from '../../engine/core/crypto/selectors';

import './CryptoCurrencyTable.css';

import { getCryptoDataAsync } from '../../engine/core/crypto/saga/asyncActions';
import { getCryptoDataSelector } from '../../engine/core/crypto/selectors';

function CryptoCurrencyTable () {
    
    const dispatch = useDispatch();
    const data = useSelector(getCryptoDataSelector);
    const activeCryptoCurrencyInfo = useSelector(activeCryptoCurrencyInfoSelector);

    useEffect(()=>{
        dispatch(getCryptoDataAsync());
    }, [dispatch]);

    return(
        <>
            <Container>
                <Row className="currencyTable">
                    {Object.keys(data).map((currency, index) =>
                        <Col xs="12" lg="4"  key={index}>
                            <CryptoCurrencyButton {...data[currency]} />
                        </Col>)}
                </Row>
                <Row className="selectCryptoCurrency justify-content-center">
                        <div>Selected coin: <span className="selectedCoin">{activeCryptoCurrencyInfo.currency}</span></div>
                </Row>
            </Container>
        </>
    );
};



export default CryptoCurrencyTable;