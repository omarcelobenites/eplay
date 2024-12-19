import styled from 'styled-components'
import { cores } from '../../style'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  color: #eee;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
  list-style: none;
  padding: 0;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`
export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
