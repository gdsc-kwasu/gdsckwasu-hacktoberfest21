import PropTypes from 'prop-types'
import ProgressbarContainer from './styled/ProgressbarContainer.styled'

export default function Progressbar({ progress, total }) {
  return (
    <ProgressbarContainer
      progress={progress}
      total={total}
    ></ProgressbarContainer>
  )
}

Progressbar.propTypes = {
  progress: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}
