import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SummaryPage() {

    const navigate = useNavigate();

    const user = useSelector(state => state.user.user)

    useEffect(()=> {
        if(!user) navigate('/signup')
    });

    return (
        <div>
            <h1>HEY from the summary page</h1>
        </div>
    )
}

export default SummaryPage;