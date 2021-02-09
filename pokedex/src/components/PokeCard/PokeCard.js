import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
width: 190px;
height: 250px;
border: solid black 1px;


`

const CentralDiv = styled.div`

display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 200px;
gap: 20px;


`

export default function PokeCard() {
  return (
    <div>
      <CentralDiv>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      </CentralDiv>      
    </div>
  )
}
