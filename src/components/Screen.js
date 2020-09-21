import React from 'react';

const Screen = ({input, output}) => {
    return (
        <div className="Screen">
            <input className="form-control custom-input" value={input} readOnly />
            <input className="form-control custom-input" value={output} readOnly />
        </div>
    )
};

export default Screen;