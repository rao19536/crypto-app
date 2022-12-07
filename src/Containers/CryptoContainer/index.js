import React, { useState } from 'react'
import * as Style from './style'
import ParentComponent from '../../Components/ParentComponent'
import SearchComponent from '../../Components/SearchComponent'
import TableComponent from '../../Components/TableComponent'
import SpinnerComponent from '../../Components/SpinnerComponent'
import { getRequestFunc } from '../../ReactQuery/BaseFunctions'
import {useQuery} from 'react-query'

const CryptoContainer = () => {
    const [name, setName] = useState('')
    const {data, error, isLoading} = useQuery(['cryptoApi'], ()=>getRequestFunc('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false'));
    if (error) return <div>Request Failed</div>
	if (isLoading) return <SpinnerComponent />
    
    const handleSearch = (data) => {
        setName(data.toLowerCase())
    }
    const filteredUsers = data && data?.data.filter((single)=>{
        return single.name.toLowerCase().includes(name)
    })

    return (
    <ParentComponent>
       <Style.StyledContainer>
            <Style.StyledSearchContainer>
                <SearchComponent
                    placeholder="Search Coin"
                    handleSearch={handleSearch}
                />
            </Style.StyledSearchContainer>
            <TableComponent
                data={filteredUsers}
            />
       </Style.StyledContainer>
    </ParentComponent>
    
  )
}
export default CryptoContainer
