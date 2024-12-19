import {
  Container,
  FooterSection,
  Link,
  Links,
  SectionTitle,
  Linklist
} from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categories</SectionTitle>
        <Links>
          <Linklist>
            <Link>RPG</Link>
          </Linklist>
          <Linklist>
            <Link>Ação</Link>
          </Linklist>
          <Linklist>
            <Link>Aventura</Link>
          </Linklist>
          <Linklist>
            <Link>Esportes</Link>
          </Linklist>
          <Linklist>
            <Link>Simulação</Link>
          </Linklist>
          <Linklist>
            <Link>Estratégia</Link>
          </Linklist>
          <Linklist>
            <Link>FPS</Link>
          </Linklist>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <Linklist>
            <Link>Novidades</Link>
          </Linklist>
          <Linklist>
            <Link>Promoções</Link>
          </Linklist>
          <Linklist>
            <Link>Em Breve</Link>
          </Linklist>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
