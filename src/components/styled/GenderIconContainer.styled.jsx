import styled from 'styled-components'

const GenderIconContainer = styled.span`
  font-size: 1.6rem;
  display: flex;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.profileColorAlt};
  color: ${({ theme }) => theme.colors.profileColor};
`

export default GenderIconContainer
