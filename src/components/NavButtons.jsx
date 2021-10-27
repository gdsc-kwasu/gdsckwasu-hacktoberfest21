import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaCaretRight, FaCaretLeft } from 'react-icons/fa'

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
    color: ${({ theme }) => theme.colors.profileColor};
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

export default function NavButtons({ enableNext, enablePrev, onNext, onPrev }) {
  return (
    <NavButtonsContainer>
      <button className="prev" onClick={onPrev} disabled={!enablePrev}>
        <FaCaretLeft />
      </button>
      <button className="next" onClick={onNext} disabled={!enableNext}>
        <FaCaretRight />
      </button>
    </NavButtonsContainer>
  )
}

NavButtons.propTypes = {
  enableNext: PropTypes.bool,
  enablePrev: PropTypes.bool,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
}

NavButtons.defaultProps = {
  enableNext: true,
  enablePrev: true,
}
