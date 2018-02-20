import App from 'grommet/components/App'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Article from 'grommet/components/Article'
import Meter from 'grommet/components/Meter'
import { Loading, Router } from 'react-static'
import { Provider } from 'react-redux'
import React from 'react'
import Routes from 'react-static-routes'
import store from './store'
import Header from './components/Header'
import Footer from './components/Footer'
import '../node_modules/grommet-css'
// import './app.css'

// Router.subscribe(loading => {
//   if (loading) {
//     console.log('A page is loading!')
//   } else {
//     console.log('A page is done loading!')
//   }
// })

export default () => (
  <Provider store={store}>
    <App centered={false}>
      <Router>
        <Article>
          {/* <Loading render={({ loading }) =>
            <Box>{loading && <Meter value={80} />}</Box>
          } /> */}
          <Section pad="none">
            <Header />
          </Section>
          {/* <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </nav> */}
          <Section pad="none" className="content">
            <Routes />
          </Section>
          <Section pad="none">
            <Footer />
          </Section>
        </Article>
      </Router>
    </App>
  </Provider>
)
