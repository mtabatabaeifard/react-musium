import PropTypes from 'prop-types';
import LogoImage from 'assets/images/musium-logo.jpg';
import { Box } from '@mui/system';
import { GoBackButton } from 'components/shared/GoBackButton';

export default function Logo({ title }) {
    Logo.propTypes = {
        title: PropTypes.string.isRequired,
    };

    return (
        <Box>
            <Box display="flex" justifyContent="center" gap={2}>
                <GoBackButton
                    fontSize="100%"
                    sx={{
                        color: 'white',
                        cursor: 'pointer',
                        height: '3.5rem',
                        width: '5rem',
                    }}
                />
                <Box width="80%" justifyContent="center">
                    <img
                        width="80%"
                        height="215px"
                        alt="logo"
                        src={LogoImage}
                    />
                </Box>
            </Box>
            <Box
                fontSize={32}
                color="#fff"
                p={1.5}
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontWeight="700">
                <p>{title}</p>
            </Box>
        </Box>
    );
}
