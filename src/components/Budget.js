import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget,dispatch,remaining } = useContext(AppContext);

    const [name] = useState('');
    const [cost, setCost] = useState('');
    const [action] = useState('');

    const submitEvent = () => {

            if(cost > remaining) {
                alert("The value cannot exceed remaining funds  £"+remaining);
                setCost("");
                return;
            }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>

            <input
                required='required'
                type='number'
                id='cost'
                value={cost}
                style={{ marginLeft: '2rem' , size: 10}}
                onChange={(event) => setCost(event.target.value)}>
                </input>

                <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                </button>
        </div>
    );
};
export default Budget;