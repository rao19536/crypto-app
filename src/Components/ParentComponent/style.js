import { styled } from '@mui/system'
import { Box } from '@mui/system'

export const StyledParentComponent = styled(Box)(()=>({
    width:'100%',
    background:'#000',
    minHeight:'100vh',
    padding:'40px 0 40px 0'
}))
