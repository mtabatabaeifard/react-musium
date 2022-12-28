import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import theme from 'theme';

export function TitleCreator({ title, className, addClassName }) {
    return <Box sx={{ ...className, ...addClassName }}>{title}</Box>;
}
TitleCreator.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    addClassName: PropTypes.string,
};
TitleCreator.defaultProps = {
    title: '',
    addClassName: '',
    className: {
        fontWeight: '700',
        fontSize: '2rem',
        lineHeight: '2.452rem',
        color: theme.palette.text.primary,
    },
};
