import { Box } from '@mui/material';
import PropTypes from 'prop-types';

export function TitleCreator({ title, className }) {
    return <Box sx={className}>{title}</Box>;
}
TitleCreator.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
};
TitleCreator.defaultProps = {
    className: { fontWeight: '700', fontSize: '2rem', lineHeight: '2.452rem' },
};
