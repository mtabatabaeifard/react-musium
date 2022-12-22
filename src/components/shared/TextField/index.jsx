import { useTheme } from '@emotion/react';
import MUTextField from '@mui/material/TextField';

export function TextField(props) {
  const theme = useTheme()
  const styles = {
    inputs: {
      height:'6rem',
      width: '95%',
      backgroundColor: '#1E1E1E',
      color: theme.palette.secondary.main,
      borderRadius: '10px',
    },
  }
  return (
    <MUTextField sx={styles.inputs
    } {...props} />
  )
}