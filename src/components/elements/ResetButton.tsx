import React from 'react'
import styled from 'styled-components';


function Reset() {
  
  function refreshPage() {
    window.location.reload();
  }
  
  return (
    <div>
      <ResetButton onClick={refreshPage}>Click to Surrender!</ResetButton>
    </div>
  );
}


//STYLES
const ResetButton = styled.button`
padding: ${({ theme }) => theme.padding.sm} ${({ theme }) => theme.padding.md};
border-radius: ${({ theme }) => theme.borderRadius.md};
background-color: ${({ theme }) => theme.colors.dark.primary};
color: ${({ theme }) => theme.colors.light.primary};
transition: transform 0.1s ease-in-out;

&:hover {
  transform: scale(1.03);
}
`

export default Reset;