import React, {useState} from 'react'
import styled from 'styled-components';
import Main from '../Main';

const NameInput = () => {
  
    const [username, setUsername] = useState('');

    function handleInput() {
        console.log(username);
    }

  return (
      <Container>
          <h3>Player 1: {username}</h3>
          <Input onChange={e => setUsername(e.target.value)} placeholder="Enter your Name..."></Input>
          
      </Container>
      
  )
}

//STYLES
const Container = styled.div`
    position: absolute;
    top: 400px;
    
    @media (max-width: 1068px) {
    position: absolute;
    top: 400px;
  }
    @media (max-width: 768px) {
        position: absolute;
        top: 680px;
    }
    
    h3{
        margin-bottom: 20px;
    }
`
const Input = styled.input`
    border-radius: 10px;
    padding: 10px;
`

export default NameInput

