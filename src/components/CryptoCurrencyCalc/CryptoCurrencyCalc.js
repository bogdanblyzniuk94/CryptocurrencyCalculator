import React, { useCallback, useRef, useEffect } from 'react';
import CryptoCurrencySelect from '../CryptoCurrencySelect/CryptoCurrencySelect';
import { useSelector, useDispatch } from 'react-redux';
import { activeCryptoCurrencyInfoSelector, activeCurrencyExchangeSelector, inputSelector, currencyToExchangeSelector } from '../../engine/core/crypto/selectors';
import { setInput } from '../../engine/core/crypto/action';
import { Row } from 'reactstrap';

import './CryptoCurrencyCalc.css'
function CryptoCurrencyCalc() {
    
    const dispatch = useDispatch();
    const value = useSelector(inputSelector);
    const onChangeHandler = useCallback((ev) => {
        const input = ev.target.value.trim();
        if (isFinite(input) && input >= 0) {
            dispatch(setInput(input));
        }
        else {
            alert('Please, enter number!');
        }
    }, [dispatch]);

    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    })

    const activeCryptoCurrencyInfo = useSelector(activeCryptoCurrencyInfoSelector);
    const input = useSelector(inputSelector);
    const total = useSelector(activeCurrencyExchangeSelector);
    const currencyToExchange = useSelector(currencyToExchangeSelector);


    return(
        <>  
            <Row className="justify-content-center">
                    <span>Volume:</span>
                    <input onChange={onChangeHandler} 
                           value={value}
                           ref={inputRef}>
                    </input>
            </Row>
            <Row className="currencyTable justify-content-center">
                    <CryptoCurrencySelect {...activeCryptoCurrencyInfo} />
            </Row>
            <Row className="justify-content-center">
                <div>
                    <span className="result"><b>{input} {activeCryptoCurrencyInfo.currency}</b> will be <b>{total}</b> in <b>{currencyToExchange}</b></span>
                </div>
            </Row> 
        </>
        
    );
};

export default CryptoCurrencyCalc;