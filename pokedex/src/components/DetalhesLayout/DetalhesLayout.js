import React from 'react'
import styled from 'styled-components'

const DivCentral = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`

const FrontImg = styled.div`
width: 100px;
height: 100px;
border: solid black 1px;
`

const BackImg = styled.div`
width: 100px;
height: 100px;
border: solid black 1px;
`

const Stats = styled.div`
width: 100px;
height: 100px;
border: solid black 1px;
`

const Type = styled.div`
width: 100px;
height: 100px;
border: solid black 1px;
`

const Moves = styled.div`
width: 100px;
height: 100px;
border: solid black 1px;
`

export default function DetalhesLayout() {
  return (
    <DivCentral>
      <div>
        <FrontImg>FrontImg</FrontImg>
        <BackImg>BackImg</BackImg>
      </div>
      <div>
        <Stats>Stats</Stats>
      </div>
      <div>
        <Type>Type</Type>
        <Moves>Moves</Moves>
      </div>      
    </DivCentral>
  )
}
