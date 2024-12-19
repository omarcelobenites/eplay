import styled from 'styled-components'
import { cores } from '../../style'

export const Container = styled.footer`
  background-color: ${cores.cinza};
  color: #fff;
  padding: 32px 0;
  text-align: left;
  font-size: 14px;
`

export const SectionTitle = styled.h4`
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
  font-size: 14px;
`
export const Linklist = styled.li`
  list-style: none;
`

export const Link = styled.a`
  color: ${cores.cinzaClaro};
  margin-right: 8px;
  text-decoration: none;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
