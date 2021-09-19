import React from 'react';
import {useHistory} from "react-router-dom";

const MainActionBigButton = ({textFirstRow, textSecondRow, onClickGoTo}) => {
    const history = useHistory();

    return (
        <button
            className="main-action-btn"
            onClick={() => history.push(onClickGoTo)}
        >
            {textFirstRow}
            <br/>
            {textSecondRow}
        </button>
    );
};

export default MainActionBigButton;