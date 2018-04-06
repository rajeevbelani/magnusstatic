import App from 'grommet/components/App'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Article from 'grommet/components/Article'
import Drawer from 'rc-drawer-menu'
import CssBaseline from 'material-ui-next/CssBaseline'
import 'rc-drawer-menu/assets/index.css'
import Meter from 'grommet/components/Meter'
import { Loading, Router, Switch, Route } from 'react-static'
import { Provider } from 'react-redux'
import MediaQuery from 'react-responsive'
import React from 'react'
import Routes from 'react-static-routes'
import Hidden from 'material-ui-next/Hidden'
// import { Button, Layout, Menu, Icon, Affix, Row, Col } from 'antd'
import store from './store'
import Header from './containers/Header'
import Home from './containers/Home'
import '../node_modules/grommet-css'
// import ResponsiveDrawer from './components/ResponsiveDrawer'
import DelhiAgraPackage from './containers/Packages/DelhiAgraPackage'
// import 'antd/dist/antd.css'
// import './components/header.css'
import Footer from './components/Footer'

// const { Sider, Content, Footer } = Layout

export default () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <App centered={false} style={{ 'font-family': 'Avenir' }}>
          <CssBaseline />
          <Box pad="none"
            margin="none">
            <Switch>
              <Route path="/packages/health/delhiagra" component={DelhiAgraPackage} />
              <Route path="/packages/health/wellness" component={DelhiAgraPackage} />
              <Route path="/delhiagrapackage" component={DelhiAgraPackage} />
              <Routes />
            </Switch>
          </Box>
        </App>

        <Footer style={{ textAlign: 'center', background: '#888' }}>
              Copyright Magnus Medi
        </Footer>
        {/*<Affix offsetBottom={40}>
          <Box align="end"> <Button type="primary" icon="message" size="large">Contact Us</Button></Box>
</Affix>**/}
      </div>
    </Router>
  </Provider>
)
