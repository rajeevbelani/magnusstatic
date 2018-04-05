import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui-next/styles'
// import Drawer from 'material-ui-next/Drawer'
import Drawer from 'rc-drawer-menu'
import AppBar from 'material-ui-next/AppBar'
import Toolbar from 'material-ui-next/Toolbar'
import List from 'material-ui-next/List'
import Typography from 'material-ui-next/Typography'
import IconButton from 'material-ui-next/IconButton'
import Hidden from 'material-ui-next/Hidden'

import Divider from 'material-ui-next/Divider'
// import MenuIcon from 'material-ui-icons/Menu'
import Routes from 'react-static-routes'
import Header from '../layout/Header'
// import { mailFolderListItems, otherMailFolderListItems } from './tileData'

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,

    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
})

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  };

  render () {
    const { classes, theme } = this.props

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>mailFolderListItems</List>
        <Divider />
        <List>otherMailFolderListItems</List>
      </div>
    )

    return (
      <div>
        <Hidden mdDown>
          {/* <Drawer width="240px" /> */}
          <Header />
        </Hidden>
        <div className={classes.root}>
          <Hidden mdUp>
            <div className={classes.navIconHide}>
              <Drawer width="240px">
                {drawer}
              </Drawer>
            </div>
          </Hidden>
          {/* <Hidden mdUp>
            <div className={classes.navIconHide}>
              <Drawer width="240px" />
            </div>
          </Hidden> */}

          {/* <main className={classes.content}>
            <div className={classes.toolbar} />
            <Routes />
            <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
          </main> */}
        </div>
      </div>
    )
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer)
