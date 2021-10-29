import styled from 'styled-components'

const SocialLinksContainer = styled.div`
  padding: 0 5rem;
  background: ${({ theme }) => theme.colors.themeColor};
  font-size: 3rem;
  display: flex;
  height: 2rem;
  gap: 1rem;
  border-radius: 1000px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};

  i.icon {
    margin: -1.5rem 0;
    width: 5rem;
    height: 5rem;
    background: ${({ theme }) => theme.colors.themeColor};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default SocialLinksContainer
