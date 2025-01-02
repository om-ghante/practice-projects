import React, { useState } from 'react'
import { evaluate } from "mathjs"

const DefaultApp = () => {
    const [ inputValue, setInputValue ] = useState(''); 
    const [ calculationHistory, setCalculationHistory ] = useState([]);
    const tooglehsty = () => {
        const div = document.getElementById('hsty');
        div.style.display = (div.style.display === 'none' || div.style.display === '') ? 'flex' : 'none';
    }
    const change_value = (value) => {
        setInputValue((preValue) => preValue + value)
    }
    const clear_value = () => {
        setInputValue('');
    }
    const backspace_value = () => {
        setInputValue((preValue) => preValue.slice(0,-1))
    }
    const final_ans = () => {
        const experasion_ans = evaluate(inputValue) //evaluate function from mathjs package suggested by chatgpt
        setCalculationHistory((preHistory) => [
            ...preHistory,
            `${inputValue} = ${experasion_ans}`
        ])
        setInputValue(String(experasion_ans))
    }
    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            e.preventDefault()
            final_ans()
        }
    }
  return (
    <>
        <div className='z-main-div'>
            <textarea type="number" id='main-input' className='main-input' value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown}/>
            <div id='hsty' className='hsty-div'>
                {calculationHistory.map((item,index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div className='main-btns-div'>
                <div className='left'>
                    <button className='cal-btn cls' onClick={clear_value}>clear</button>
                    <button className='cal-btn bksp' onClick={backspace_value}>backspace</button>
                    <button className='cal-btn hsty' onClick={tooglehsty}>history</button>
                    <button className='cal-btn num' onClick={(e) => change_value(e.target.value)} value={1}>1</button>
                    <button className='cal-btn num' onClick={(e) => change_value(e.target.value)} value={2}>2</button>
                    <button className='cal-btn num' onClick={(e) => change_value(e.target.value)} value={3}>3</button>
                    <button className='cal-btn num' onClick={(e) => change_value(e.target.value)} value={4}>4</button>
                    <button className='cal-btn num' onClick={(e) => change_value(e.target.value)} value={5}>5</button>
                    <button className='cal-btn num' onClick={(e) => change_value(e.target.value)} value={6}>6</button>
                    <button className='cal-btn num' onClick={(e) => change_value(e.target.value)} value={7}>7</button>
                    <button className='cal-btn num' onClick={(e) => change_value(e.target.value)} value={8}>8</button>
                    <button className='cal-btn num' onClick={(e) => change_value(e.target.value)} value={9}>9</button>
                    <button className='cal-btn num' onClick={(e) => change_value(e.target.value)} value={10}>0</button>
                    <button className='cal-btn num' onClick={(e) => change_value(e.target.value)} value={"."}>.</button>
                    <button className='cal-btn ans' onClick={final_ans}>Ans</button>
                </div>
                <div className='right'>
                    <button className='cal-btn opt' onClick={(e) => change_value(e.target.value)} value={"+"}>+</button>
                    <button className='cal-btn opt' onClick={(e) => change_value(e.target.value)} value={"-"}>-</button>
                    <button className='cal-btn opt' onClick={(e) => change_value(e.target.value)} value={"*"}>*</button>
                    <button className='cal-btn opt' onClick={(e) => change_value(e.target.value)} value={"/"}>/</button>
                    <button className='cal-btn opt' onClick={(e) => change_value(e.target.value)} value={"%"}>%</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default DefaultApp