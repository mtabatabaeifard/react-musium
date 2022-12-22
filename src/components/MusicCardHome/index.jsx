import { Box } from '@mui/material';
import PropTypes from 'prop-types';

export function MusicCardHome({ icon, title }) {
    return (
        <Box sx={{ display: 'flex' }}>
            <Box
                sx={{ borderRadius: '.3rem 0rem 0rem .3rem' }}
                component="img"
                src={icon}
            />
            <Box
                sx={{
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontWeight: '700',
                    padding: '1.95rem 4rem 1.95rem 1.4rem',
                    backgroundColor: 'rgba(67,99,105,20%)',
                    borderRadius: ' 0rem 1rem 1rem 0',
                    width: '7.6rem',
                }}>
                {title}
            </Box>
        </Box>
    );
}
MusicCardHome.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
