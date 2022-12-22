import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import theme from 'theme';

// eslint-disable-next-line no-unused-vars
export function TitleCreator({ title, className, addClassName }) {
    return <Box sx={{ ...className, ...addClassName }}>{title}</Box>;
}
TitleCreator.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    addClassName: PropTypes.string.isRequired,
};
TitleCreator.defaultProps = {
    className: {
        fontWeight: '700',
        fontSize: '2rem',
        lineHeight: '2.452rem',
        color: theme.palette.text.primary,
    },
};
