import styled from 'styled-components'
import Game from './Game/Game'
import Reset from './elements/ResetButton'
import NameInput from './elements/NameInput'

const Main = () => {

  return (
    <MainWrapper>
      <Game/>
      <NameInput/>
      <Reset/>
    </MainWrapper>
  )

}

const MainWrapper = styled.main`
  padding: ${({ theme }) => theme.padding.lg};
`



export default Main
