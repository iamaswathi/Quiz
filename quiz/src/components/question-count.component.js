import React from 'react';

function QuestionCount(props) {
    return (
        <div className="clearfix infoSection">
            <div className="float-right">
                Question <span>{props.counter}</span> / <span>{props.total}</span>
            </div>
        </div>
    );
}

export default QuestionCount;