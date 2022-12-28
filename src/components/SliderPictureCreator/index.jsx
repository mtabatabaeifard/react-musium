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
                backgroundImage: `url(${icon})`,
                backgroundRepeat: ' no-repeat',
                width: `${iconWidth}`,
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
    icon: PropTypes.string,
    title: PropTypes.string,
    borderColor: PropTypes.string,
    iconWidth: PropTypes.string,
    iconHeight: PropTypes.string,
};
SliderPictureCreator.defaultProps = {
    icon: '',
    title: '',
    borderColor: '',
    iconWidth: '',
    iconHeight: '',
};
