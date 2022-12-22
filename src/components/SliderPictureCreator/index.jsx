import { Box } from '@mui/material';
import PropTypes from 'prop-types';

export function SliderPictureCreator({
    icon,
    title,
    borderColor,
    iconWidth,
    iconHeight,
}) {
    return (
        <Box
            sx={{
                // padding: '.9rem 6rem 11rem 2.4rem',
                backgroundImage: `url(${icon})`,
                backgroundRepeat: ' no-repeat',
            }}>
            <Box
                sx={{
                    width: `${iconWidth}`,
                    height: `${iconHeight}`,
                    borderBottom: `.8rem solid ${borderColor}`,
                }}>
                <Box
                    sx={{
                        padding: '1rem 0rem 0rem 2.4rem',
                        color: '#ffffff',
                        fontSize: '1.5rem',
                        fontWeight: '700',
                    }}>
                    {title}
                </Box>
            </Box>
        </Box>
    );
}
SliderPictureCreator.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
    iconWidth: PropTypes.string.isRequired,
    iconHeight: PropTypes.string.isRequired,
};
