import { styled } from '@mui/system'
import TextField from '@mui/material/TextField'

export const StyledSearchInput = styled(TextField)(()=>({
    color:'white',
    borderRadius:'8px',
    width:'40%',
    backgroundImage: 'linear-gradient(to right, violet, skyblue)',
    root: {
        '&:hover $notchedOutline': {
          borderColor: 'orange'
        }
    },
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            border: 0
        }
    },
    input:{
        color: '#e2e2e2',
        fontSize:'20px',
        fontWeight:600
    },
    label:{
        display:'none'
    },
    legend:{
        display:'none'
    },
}))
