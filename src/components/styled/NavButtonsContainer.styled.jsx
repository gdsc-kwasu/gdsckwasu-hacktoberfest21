import styled from 'styled-components'

const NavButtonsContainer = styled.div`
  button.next,
  button.prev {
    font-size: 2rem;
    position: absolute;
    top: calc(50% - 1rem);
    z-index: 10;
    background: none;
    border: none;
    outline: none;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    color: 'black';
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    opacity: 0.2;
  }

  button.next {
    right: 1rem;
  }

  button.prev {
    left: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    button.next,
    button.prev {
      position: fixed;
      background: white;
      border: 1px solid black;
    }
  }
`

export default NavButtonsContainer
