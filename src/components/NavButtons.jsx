import PropTypes from 'prop-types'
import { FaCaretRight, FaCaretLeft } from 'react-icons/fa'
import NavButtonsContainer from './styled/NavButtonsContainer.styled'

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
