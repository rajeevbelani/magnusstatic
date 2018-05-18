import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-static'
import axios from 'axios'
import { Row, Col, Icon, Menu, Button, Popover, Select } from 'antd'
import { enquireScreen } from './utils'
import logoImg from '../mmlogo.png'
import nabhLogo from '../nabhlogo.png'
import iataLogo from '../iata.png'


const { Option, OptGroup } = Select

// const LOGO_URL = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
const LOGO_URL = logoImg
const textSearchUrl = 'https://www.google.com/search?q=site:pro.ant.design+'

// https://www.algolia.com/apps/YEWBNYLVLW/
const searchUrl = 'https://yewbnylvlw-dsn.algolia.net/1/indexes/antd pro/query?x-algolia-agent=Algolia for vanilla JavaScript 3.21.1&x-algolia-application-id=YEWBNYLVLW&x-algolia-api-key=b42bc1a0c8ab7be447666944228a3176'

class Header extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  state = {
    inputValue: '',
    menuVisible: false,
    menuMode: 'horizontal',
    searchOption: [],
    searching: false,
  };

  componentDidMount () {
    // this.context.router.listen(this.handleHideMenu)
    const { searchInput } = this
    enquireScreen(b => {
      this.setState({ menuMode: b ? 'inline' : 'horizontal' })
    })
    document.addEventListener('keyup', event => {
      if (event.keyCode === 83 && event.target === document.body) {
        searchInput.focus()
      }
    })
  }

  search = (key, success, error) => {
    clearTimeout(this.timer)
    if (!key) {
      success()
      return
    }

    this.timer = setTimeout(() => {
      this.setState({
        searching: true,
      })
      axios.post(searchUrl, {
        params: `query=${key}&hitsPerPage=20&facets=*&maxValuesPerFacet=10&facetFilters=[]`,
      }).then(response => {
        this.setState({
          searching: false,
        })
        if (success) {
          success(response)
        }
      }).catch(err => {
        this.setState({
          searching: false,
        })
        if (error) {
          error(err)
        }
      })
    }, 200)
  }

  handleHideMenu = () => {
    this.setState({
      menuVisible: false,
    })
  }

  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    })
  }

  onMenuVisibleChange = visible => {
    this.setState({
      menuVisible: visible,
    })
  }

  handleSelect = value => {
    location.href = value
  }

  handleChange = value => {
    this.setState({ inputValue: value })

    this.search(value, data => {
      if (data && data.data && data.data.hits) {
        this.setState({
          searchOption: data.data.hits,
        })
      }
    })
  }

  render () {
    const { inputValue, menuMode, menuVisible, searchOption, searching } = this.state
    const { intl } = this.props
    const path = location.pathname

    const module = location.pathname.replace(/(^\/|\/$)/g, '').split('/').slice(0, -1).join('/')
    let activeMenuItem = module || 'home'
    if (/^components/.test(path)) {
      activeMenuItem = 'blog'
    } else if (/blog/.test(path)) {
      activeMenuItem = 'blog'
    } else if (/patientstories/.test(path)) {
      activeMenuItem = 'patientStories'
    } else if (/doctors/.test(path)) {
      activeMenuItem = 'doctors'
    } else if (/hospitals/.test(path)) {
      activeMenuItem = 'hospitals'
    } else if (path === '/') {
      activeMenuItem = 'home'
    }
    // activeMenuItem = 'home'

    const isZhCN = false

    const menu = (
      <Menu mode={menuMode} selectedKeys={[activeMenuItem]} id="nav" key="nav">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="blog">
          <Link to="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item key="patientStories">
          <Link to="/patientstories">Patient Stories</Link>
        </Menu.Item>
        <Menu.Item key="doctors">
          <Link to="/doctors">Doctors</Link>
        </Menu.Item>
        <Menu.Item key="hospitals">
          <Link to="/hospitals">Hospitals</Link>
        </Menu.Item>
        {/* {
          menuMode === 'inline' && (
            <Menu.Item key="preview">
              <a target="_blank" href="http://preview.pro.ant.design/" rel="noopener noreferrer">
                <FormattedMessage id="app.home.preview" />
              </a>
            </Menu.Item>
          )
        } */}
      </Menu>
    )

    const componentSearchOption = searchOption.filter(v => v.type === 'component').map(
      d => <Option key={d.url}>{d.title} {isZhCN && d.subTitle}</Option>
    )
    const docSearchOption = searchOption.filter(v => v.type === 'doc').map(
      d => <Option key={d.url}>{isZhCN ? d.title : (d['title-en'] || d.title)}</Option>
    )

    const options = []

    if (componentSearchOption) {
      options.push(<OptGroup label="Search" key="component">{componentSearchOption}</OptGroup>)
    }
    if (docSearchOption) {
      options.push(<OptGroup label="Docs" key="doc">{docSearchOption}</OptGroup>)
    }

    if (inputValue) {
      options.push(<Option key={`${textSearchUrl}${inputValue}`}>All{inputValue}</Option>)
    }

    return (
      <div id="header" className="header">
        {menuMode === 'inline' ? (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            {/* <Icon
              className="nav-phone-icon"
              type="menu"
              onClick={this.handleShowMenu}
            /> */}
          </Popover>
        ) : null}
        <Row>
          <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
            <Link id="logo" to="/">
              <img src={LOGO_URL} alt="logo" />
              {/* <img src="https://gw.alipayobjects.com/zos/rmsportal/tNoOLUAkyuGLXoZvaibF.svg" alt="Magnus Medi" /> */}
              Magnus Medi
            </Link>
          </Col>
          <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
            <div id="search-box">
              <Icon type="search" />
              <Select
                mode="combobox"
                value={inputValue}
                placeholder="Search Hospitals, Doctors, Treatments etc..."
                notFoundContent=""
                defaultActiveFirstOption={false}
                showArrow={false}
                filterOption={false}
                optionLabelProp="label"
                onSelect={this.handleSelect}
                onChange={this.handleChange}
              >
                {
                  searching && (
                    <Option className="search-loading" key="search">
                      <Icon type="loading" />
                    </Option>
                  )
                }
                {options}
              </Select>
            </div>
            <div className="header-meta">
              <div id="preview">
                <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
                  <Link id="logo" to="/">
                    <Row gutter={18}>
                      <Col span={12} ><img src={nabhLogo} alt="logo" /></Col>
                      <Col span={12} ><img src={iataLogo} alt="logo" /></Col>
                    </Row>
                  </Link>
                </Col>
                {/* <a
                  id="preview-button"
                  target="_blank"
                  href="http://preview.pro.ant.design"
                  rel="noopener noreferrer"
                >

                  <Button icon="eye-o">
                    Login
                  </Button>
                </a> */}
              </div>
              {menuMode === 'horizontal' ? <div id="menu">{menu}</div> : null}
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header
