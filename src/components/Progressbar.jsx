import styled from 'styled-components'
import PropTypes from 'prop-types'

const ProgressbarContainer = styled.div`
  --progress: ${({ progress }) => progress};
  --total: ${({ total }) => total};

  transition: all 0.2s ease-out;
  background: ${({ theme }) => theme.colors.progressbarColor};
  position: fixed;
  top: 0;
  left: 0;
  height: 0.5rem;
  width: calc((var(--progress) / var(--total)) * 100vw);
  z-index: 10000;
`

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
