import { styled, Container, Box } from '@mui/system'

export const StyledContainer = styled(Container)(({theme})=>({
    width:'100%',
    [theme.breakpoints.up('lg')]: {
        width:'900px'
    },
}))
export const StyledSearchContainer = styled(Box)(()=>({
    display:'flex',
    justifyContent:'center',
    margin:'30px 0'
}))
