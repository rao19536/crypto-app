import { styled, Box } from '@mui/system'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import { Typography } from '@mui/material'

export const StyledTableRow = styled(TableRow)(()=>({
    '&:last-child td, &:last-child th': { 
        border: 0 
    }, 
    background:'#000'
}))
export const StyledTableCell = styled(TableCell)(()=>({
    color:'white',
    minWidth:'120px',
    maxWidth:'120px',
    paddingRight:0
}))
export const StyledParentLogoAndLabel = styled(Box)(()=>({
    display:'flex',
    alignItems:'center',
}))
export const StyledTitle = styled(Typography)(()=>({
    paddingLeft:'10px',
    fontWeight:'bold'
}))
export const StyledTypography = styled(Typography)(({percentage})=>({
    color: percentage ? percentage>0 ? 'green' : 'red' : ''
}))
export const StyledMktCapTitle = styled(Typography)(()=>({
    textAlign:'center'
}))
export const StyledMktCapFigures = styled(Box)(()=>({
     textAlign:'center'
}))
