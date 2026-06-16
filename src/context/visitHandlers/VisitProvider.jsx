import React, { useState, useEffect } from 'react';
import VisitorContext from './VisitorContext';

function VisitProvider({ children }) {
    const [isReturning, setIsReturning] = useState(false);

    useEffect(() => {
        const hasVisited = localStorage.getItem('has_visited');

        if (hasVisited) {
            setIsReturning(true);
        } else {
            localStorage.setItem('has_visited', 'true');
            setIsReturning(false);
        }
    }, []);

    const value = { isReturning };
    return (
        <VisitContext.Provider value={value}>
            {children}
        </VisitContext.Provider>
    );
};