import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import GlobalStyles from "./GlobalStyles"
import Sidebar from "../../organisms/Sidebar/Sidebar"
import Menu from "../../organisms/Menu/Menu"

const Container = styled.div`
  padding: 35px 30px 0 25px;
  height: 100%;
  display: flex;
  align-items: stretch;
`

const SidebarWrapper = styled.aside`
  width: 190px;
  height: 100%;
  padding-bottom: 40px;
  border-right: 1px solid #BFBFBF;
`

const ContentWrapper = styled.main`
  height: 100%;
  width: 100%;
  padding-left: 30px;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Container>
      <Menu />
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
