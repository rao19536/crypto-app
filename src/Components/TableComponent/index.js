import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import * as Style from './style'

export default function TableComponent({data}) {
    let getPercentageOnly = false
    const parsePersentage = (val, isPercentageReq) => {
        return isPercentageReq ?
        val ? `${parseFloat(val).toFixed(2)} %` : val
        : val ? parseFloat(val).toFixed(2) : val
    }
  return (
    <TableContainer sx={{ maxWidth: 880 }}>
      <Table aria-label="simple table">
        <TableBody>
          {data.map((row) => (
            <Style.StyledTableRow
              key={row.name}
            >
              <Style.StyledTableCell>
                <Style.StyledParentLogoAndLabel>
                    <img src={row.image} width='25' alt='Loading'/>
                    <Style.StyledTitle>
                        {row.name}
                    </Style.StyledTitle>
                </Style.StyledParentLogoAndLabel>
              </Style.StyledTableCell>
              <Style.StyledTableCell>{row?.current_price ?? 'loading...'}</Style.StyledTableCell>
              <Style.StyledTableCell>
                <Style.StyledTypography percentage={parsePersentage(row?.market_cap_change_percentage_24h, getPercentageOnly)}>
                    {parsePersentage(row?.market_cap_change_percentage_24h, !getPercentageOnly) ?? 'loading'}
                </Style.StyledTypography>
              </Style.StyledTableCell>
              <Style.StyledTableCell align="right">
                <Style.StyledMktCapTitle>
                    Mkt Cap:
                </Style.StyledMktCapTitle>
                <Style.StyledMktCapFigures>
                    Rs.{row?.total_volume.toLocaleString() ?? 'loading...'}
                </Style.StyledMktCapFigures>
              </Style.StyledTableCell>
            </Style.StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
