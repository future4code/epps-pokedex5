import React from 'react'
import styled from 'styled-components'
import Pikachu from '../img/025.png'

const Botão = styled.button`
width: 100px;
height: 50px;
font-size: 10px;
border-radius: 10px;
&:hover {
  background-color: blue;
  color: white;
}
`

const Card = styled.div`
width: 215px;
height: 295px;
border: solid #ffff66 8px;
display: flex;
flex-direction: column;
`

const DivBttn = styled.div`
width: 215px;
height: 50px;
display:flex;

justify-content: space-between;
`

const CentralDiv = styled.div`

display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 200px;
gap: 20px;
`

const PokeName = styled.h3`

`

export default function PokeCard(props) {
  return (
    <div>
      <CentralDiv>
        <Card>
          <img src={Pikachu}/>
          <PokeName>Pikachu</PokeName>
          <DivBttn>            
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>          
        </Card>                
        <Card><img src={Pikachu}/>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card><img src={Pikachu}/>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Pikachu}/>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Pikachu}/>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Pikachu}/>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Pikachu}/>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Pikachu}/>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Pikachu}/>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Pikachu}/>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Pikachu}/>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Pikachu}/>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Pikachu}/>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Pikachu}/>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Pikachu}/>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
      </CentralDiv>      
    </div>
  )
}
