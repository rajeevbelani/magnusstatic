import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-static'
import { Row, Col, Button } from 'antd'
import * as utils from '../utils'

class Footer extends React.Component {
  handleLangChange = () => {
    const { pathname } = this.props.location
    const currentProtocol = `${window.location.protocol}//`
    const currentHref = window.location.href.substr(currentProtocol.length)

    if (utils.isLocalStorageNameSupported()) {
      localStorage.setItem('locale', utils.isZhCN(pathname) ? 'en-US' : 'zh-CN')
    }

    window.location.href = currentProtocol + currentHref.replace(
      window.location.pathname,
      utils.getLocalizedPathname(pathname, !utils.isZhCN(pathname)),
    )
  }

  render () {
    const { pathname } = this.props.location
    const isZhCN = utils.isZhCN(pathname)
    return (
      <footer id="footer" className="dark">
        <div className="footer-wrap">
          <Row>
            <Col lg={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>Ant Design</h2>
                <div>
                  <a target="_blank " href="https://github.com/ant-design/ant-design-pro">
                    Ant Design Pro GitHub
                  </a>
                </div>
                <div>
                  <a target="_blank " href="http://ant.design">
                    Ant Design
                  </a>
                </div>
                <div>
                  <a href="http://mobile.ant.design">Ant Design Mobile</a>
                </div>
                <div>
                  <a href="http://ng.ant.design">NG-ZORRO</a>
                  <span> - </span>
                  Ant Design of Angular
                </div>
                <div>
                  <a target="_blank " href="https://github.com/websemantics/awesome-ant-design">
                    app.footer.awesome
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>app.footer.resources</h2>
                <div>
                  <a href="http://scaffold.ant.design">Scaffolds</a>
                  <span> - </span>
                  app.footer.scaffolds
                </div>
                <div>
                  <a target="_blank" rel="noopener" href="http://motion.ant.design">Ant Motion</a>
                  <span> - </span>
                  app.footer.motion
                </div>
                <div>
                  <a target="_blank" rel="noopener" href="http://library.ant.design/">Axure Library</a>
                  <span> - </span>
                  app.footer.antd-library
                </div>
                <div>
                  <a target="_blank" rel="noopener" href="http://ux.ant.design">Ant UX</a>
                  <span> - </span>
                  app.footer.antux
                </div>
                <div>
                  <a target="_blank" rel="noopener" href="https://github.com/dvajs/dva">dva</a> -
                  app.footer.dva
                </div>
                <div>
                  <a target="_blank" rel="noopener" href="https://github.com/dvajs/dva-cli">dva-cli</a> -
                  app.footer.dev-tools
                </div>
              </div>
            </Col>
            <Col lg={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>app.footer.community</h2>
                <div>
                  {/* <Link to={utils.getLocalizedPathname('/docs/changelog', isZhCN)}>
                    app.footer.change-log
                  </Link> */}
                </div>
                <div>
                  {/* <Link to={utils.getLocalizedPathname('/docs/faq', isZhCN)}>
                    app.footer.faq
                  </Link> */}
                </div>
                <div>
                  <a target="_blank" rel="noopener" href="https://gitter.im/ant-design/ant-design-pro">
                    app.footer.discuss-cn
                  </a>
                </div>
                <div>
                  <a target="_blank" rel="noopener" href="https://github.com/ant-design/ant-design-pro/issues">
                    app.footer.issues
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener"
                    href={`http://ant.design/docs/spec/work-with-us${isZhCN ? '-cn' : ''}`}
                  >
                    app.footer.work-with-us
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  app.footer.more-product
                </h2>
                <div>
                  <a target="_blank" rel="noopener" href="https://antv.alipay.com/">AntV</a>
                  <span> - </span>
                  app.footer.data-vis
                </div>
                <div>
                  <a target="_blank" rel="noopener" href="https://eggjs.org/">Egg</a>
                  <span> - </span>
                  app.footer.eggjs
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="bottom-bar">
          <Col lg={6} sm={24}>
            <div className="translate-button">
              <Button ghost size="small" onClick={this.handleLangChange}>
                app.header.lang
              </Button>
            </div>
          </Col>
          <Col lg={18} sm={24}>
            <span
              style={{ lineHeight: '16px', paddingRight: 12, marginRight: 11, borderRight: '1px solid rgba(255, 255, 255, 0.55)' }}
            >
              <a
                href="https://docs.alipay.com/policies/privacy/antfin"
                rel="noopener noreferrer"
                target="_blank"
              >
                app.footer.privacy
              </a>
            </span>
            <span style={{ marginRight: 24 }}>
              <a
                href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                app.footer.commitment
              </a>
            </span>
            <span style={{ marginRight: 12 }}>ICP 证浙 B2-2-100257</span>
            <span style={{ marginRight: 12 }}>Copyright © app.footer.company</span>
          </Col>
        </Row>
      </footer>
    )
  }
}

export default Footer
