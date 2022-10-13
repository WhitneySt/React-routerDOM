import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
    const { userName } = useParams();

    return (
        <div>
            <h2>Usuario: {userName}</h2>
        </div>
    )
}

export default User