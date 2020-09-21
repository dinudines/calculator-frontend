import React from 'react';

const Body = ({ handleClick=() => {}, disabled}) => {
    return (
        <div className="Body container">
            <div className="row">
                <div className="col container">
                    <div className="row">
                        <button type="button" className="btn btn-light custom-btn" onClick={() => handleClick("7")}>7</button>
                        <button type="button" className="btn btn-light custom-btn" onClick={() => handleClick("8")}>8</button>
                        <button type="button" className="btn btn-light custom-btn" onClick={() => handleClick("9")}>9</button>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-light custom-btn" onClick={() => handleClick("4")}>4</button>
                        <button type="button" className="btn btn-light custom-btn" onClick={() => handleClick("5")}>5</button>
                        <button type="button" className="btn btn-light custom-btn" onClick={() => handleClick("6")}>6</button>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-light custom-btn" onClick={() => handleClick("1")}>1</button>
                        <button type="button" className="btn btn-light custom-btn" onClick={() => handleClick("2")}>2</button>
                        <button type="button" className="btn btn-light custom-btn" onClick={() => handleClick("3")}>3</button>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-light custom-btn" onClick={() => handleClick("0")}>0</button>
                        <button type="button" className="btn btn-light custom-btn" onClick={() => handleClick(".")}>.</button>
                        <button type="button" disabled={disabled} className="btn btn-primary custom-btn" onClick={() => handleClick("=")}>=</button>
                    </div>
                </div>
                <div className="col container">
                    <div className="row">
                        <button type="button" className="btn btn-dark custom-btn" onClick={() => handleClick("+")}>+</button>
                        <button type="button" className="btn btn-dark custom-btn" onClick={() => handleClick("%")}>%</button>
                        <button type="button" className="btn btn-dark custom-btn" onClick={() => handleClick("cube root")}><sup>3</sup>√</button>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-dark custom-btn" onClick={() => handleClick("-")}>-</button>
                        <button type="button" className="btn btn-dark custom-btn" onClick={() => handleClick("square")}>x<sup>2</sup></button>
                        <button type="button" className="btn btn-function custom-btn" onClick={() => handleClick("back")}>Back</button>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-dark custom-btn" onClick={() => handleClick("*")}>*</button>
                        <button type="button" className="btn btn-dark custom-btn" onClick={() => handleClick("cube")}>x<sup>3</sup></button>
                        <button type="button" className="btn btn-function custom-btn" onClick={() => handleClick("clear")}>Clear</button>
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-dark custom-btn" onClick={() => handleClick("/")}>/</button>
                        <button type="button" className="btn btn-dark custom-btn" onClick={() => handleClick("square root")}>√</button>
                        <button type="button" className="btn btn-function custom-btn" onClick={() => handleClick("clear history")}>Clear history</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;