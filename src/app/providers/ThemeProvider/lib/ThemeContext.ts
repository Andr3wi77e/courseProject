/* eslint-disable no-unused-vars */
import { createContext } from 'react';
import { Theme } from '../consts/consts';

export type ThemeContextProps = {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({});
