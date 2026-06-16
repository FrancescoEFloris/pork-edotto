import { useContext } from 'react';
import VisitContext from './VisitContext';

function useVisit() {
    const context = useContext(VisitContext);

    return context;
};

export default useVisit;