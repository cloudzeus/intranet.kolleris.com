// In theme.js
import { defaultTheme } from 'react-admin';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { merge } from 'lodash';

export const theme = createMuiTheme(
    merge({}, defaultTheme, {
        palette: {
            // Your theme goes here
            // Write the following code to have an orange app bar. We'll explain it later in this article.
            secondary: {
                main: '#353434', // Not far from orange
            },
        },
    })
);
