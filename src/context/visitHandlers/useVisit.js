import { useContext } from 'react';
import VisitorContext from './VisitorContext';

export const useVisitor = () => {
    const context = useContext(VisitorContext);

    return context;
};