import { useContext } from 'react';
import { ThemedContext } from '../ThemedContext/ThemedContext';

export const useThemed = () => {
    return useContext(ThemedContext);
};
