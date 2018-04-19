import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import 'modern-normalize/modern-normalize.css'
import './index.css'

/*
  Layout File
  this file is the base of every page
  useful for headers & navs

  this is where global styles/font loading lives
*/


// styled components
const Container = styled.div`
  margin: 4rem;
  height: 100%;
`

const InnerContainer = styled.div`
  height: 100%;
`

const TitleLink = styled(Link)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }
`

const HeaderContainer = styled.div`

`


// components
function Header () {
  return (
    <HeaderContainer>
      <TitleLink to="/">
          <h1>Boiled</h1>
      </TitleLink>
    </HeaderContainer>
  )
}


// page component
const TemplateWrapper = ({ children }) => (
  <Container>
    <Helmet
      title="boiled"
      meta={[
        { name: 'description', content: 'boilerplate' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Header />
    
    <InnerContainer>
      {children()}
    </InnerContainer>

  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper