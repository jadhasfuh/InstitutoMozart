import { createMuiTheme } from '@material-ui/core/styles';

const theme  = createMuiTheme({
    palette: {
        primary: {
            main: '#FFFFFF'
        }, 
        secondary: {
            main: '#568934'
        }
    },
    typography: {
        fontFamily: [ 'Arvo', 'serif'].join(','),
    }
});

export default theme;