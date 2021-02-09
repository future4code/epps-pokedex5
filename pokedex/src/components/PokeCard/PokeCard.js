import React from 'react'
import styled from 'styled-components'
import Pikachu from '../img/Pikachu.png'
import Chamander from '../img/Charmander.png'
import Squirtle from '../img/Squirtle.png'
import Beedril from '../img/Beedril.png'
import Caterpie from '../img/Caterpie.png'
import Ekans from '../img/Ekans.png'
import Nidoqueen from '../img/Nidoqueen.png'
import Nidoran from '../img/Nidoran.png'
import Nidorino from '../img/Nidorino.png'
import Pidgey from '../img/Pidgey.png'
import Rattata from '../img/Rattata.png'
import Sandshrew from '../img/Sandshrew.png'
import Spearow from '../img/Spearow.png'
import Weedle from '../img/Weedle.png'



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
        <Card><img src={Chamander}/>
        <PokeName>Charmander</PokeName>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card><img src={Squirtle}/>
        <PokeName>Squirtle</PokeName>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Beedril}/>
        <PokeName>Beedril</PokeName>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Caterpie}/>
        <PokeName>Caterpie</PokeName>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Ekans}/>
        <PokeName>Ekans</PokeName>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Nidoqueen}/>
        <PokeName>Nidoqueen</PokeName>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Nidoran}/>
        <PokeName>Nidoran</PokeName>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Nidorino}/>
        <PokeName>Nidorino</PokeName>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Pidgey}/>
        <PokeName>Pidgey</PokeName>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Rattata}/>
        <PokeName>Rattata</PokeName>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Sandshrew}/>
        <PokeName>Sandshrew</PokeName>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Spearow}/>
        <PokeName>Spearow</PokeName>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Squirtle}/>
        <PokeName>Squirtle</PokeName>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
        <Card>
        <img src={Weedle}/>
        <PokeName>Weedle</PokeName>
          <DivBttn>
            <Botão>Adicionar a Pokedex</Botão>
            <Botão>Detalhes</Botão>
          </DivBttn>  
        </Card>
      </CentralDiv>      
    </div>
  )
}
