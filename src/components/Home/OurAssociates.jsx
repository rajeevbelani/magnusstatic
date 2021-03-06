import React from 'react'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import Parallax from 'rc-scroll-anim/lib/ScrollParallax'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import PropTypes from 'prop-types'
import { List, Card, Carousel } from 'antd'
import kdh from '../../kdh.png'
import { Avatar } from 'antd'

const TweenOneGroup = TweenOne.TweenOneGroup
const { Meta } = Card

const featuresEN = [
  {
    title: ' One Thing',
    content: 'One thing ka description',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/VriUmzNjDnjoFoFFZvuh.svg',
    color: '#13C2C2',
    shadowColor: 'rgba(19,194,194,.12)',
  },
  {
    title: 'Second Thing',
    content: 'Uska Description',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/smwQOoxCjXVbNAKMqvWk.svg',
    color: '#2F54EB',
    shadowColor: 'rgba(47,84,235,.12)',
  },
  {
    title: 'Third Thing',
    content: 'third Ting ka decription',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/hBbIHzUsSbSxrhoRFYzi.svg',
    color: '#F5222D',
    shadowColor: 'rgba(245,34,45,.12)',
  },
//   {
//     title: 'Fourth THing',
//     content: 'Descriptiomn',
//     src: 'https://gw.alipayobjects.com/zos/rmsportal/BISfzKcCNCYFmTYcUygW.svg',
//     color: '#1AC44D',
//     shadowColor: 'rgba(26,196,77,.12)',
//   },
//   {
//     title: 'Fifth Thing',
//     content: 'Description',
//     src: 'https://gw.alipayobjects.com/zos/rmsportal/XxqEexmShHOofjMYOCHi.svg',
//     color: '#FAAD14',
//     shadowColor: 'rgba(250,173,20,.12)',
//   },
//   {
//     title: 'Sixth Thing',
//     content: 'Description',
//     src: 'https://gw.alipayobjects.com/zos/rmsportal/JsixxWSViARJnQbAAPkI.svg',
//     color: '#722ED1',
//     shadowColor: 'rgba(114,46,209,.12)',
//   },
//   {
//     title: 'Best Practice',
//     content: 'Solid workflow make your code health',
//     src: 'https://gw.alipayobjects.com/zos/rmsportal/pbmKMSFpLurLALLNliUQ.svg',
//     color: '#FA8C16',
//     shadowColor: 'rgba(250,140,22,.12)',
//   },
//   {
//     title: 'Mock Data',
//     content: 'Easy to use mock development solution',
//     src: 'https://gw.alipayobjects.com/zos/rmsportal/aLQyKyUyssIUhHTZqCIb.svg',
//     color: '#EB2F96',
//     shadowColor: 'rgba(235,45,150,.12)',
//   },
//   {
//     title: 'UI Test',
//     content: 'Fly safely with unit test and e2e test',
//     src: 'https://gw.alipayobjects.com/zos/rmsportal/RpJIQitGbSCHwLMimybX.svg',
//     color: '#1890FF',
//     shadowColor: 'rgba(24,144,255,.12)',
//   },
]

const pointPos = [
  { x: -30, y: -10 },
  { x: 20, y: -20 },
  { x: -65, y: 15 },
  { x: -45, y: 80 },
  { x: 35, y: 5 },
  { x: 50, y: 50, opacity: 0.2 },
]

const data = [
  {
    image: '/images/hospitals/ambani.png',
    title: 'Kokilaben Hospital',
  },
  {
    image: '/images/hospitals/apollo.png',
    title: 'Apollo Hospital',
  },
  {
    image: '/images/hospitals/artemis.jpg',
    title: 'Artemis Hospital',
  },
  {
    image: '/images/hospitals/blk.jpeg',
    title: 'BLK Hospital',
  },
  {
    image: '/images/hospitals/fortis.jpeg',
    title: 'Fortis Hospital',
  },
  {
    image: '/images/hospitals/global.png',
    title: 'Global Hospital',
  },
  {
    image: '/images/hospitals/jaslok.jpg',
    title: 'Jaslok Hospital',
  },
  {
    image: '/images/hospitals/kohinoor.png',
    title: 'Kohinoor Hospital',
  },
  {
    image: '/images/hospitals/manipal.jpeg',
    title: 'Manipal Hospital',
  },
  {
    image: '/images/hospitals/max_healthcare.png',
    title: 'Max Healthcare Hospital',
  },
  {
    image: '/images/hospitals/medanta.png',
    title: 'Medanta Hospital',
  },
  {
    image: '/images/hospitals/narayana.png',
    title: 'Narayana Hospital',
  },
  {
    image: '/images/hospitals/shree_krishna.png',
    title: 'Shree Krishna Hospital',
  },
  {
    image: '/images/hospitals/wockhardt.png',
    title: 'Wockhardt Hospital',
  },
  // {
  //   image: 'https://mk0similima57rg8gkp8.kinstacdn.com/wp-content/uploads/2016/03/ambani.png',
  //   title: 'Title 4',
  // },
  // {
  //   image: 'https://mk0similima57rg8gkp8.kinstacdn.com/wp-content/uploads/2016/03/ambani.png',
  //   title: 'Title 5',
  // },
  // {
  //   image: 'https://mk0similima57rg8gkp8.kinstacdn.com/wp-content/uploads/2016/03/ambani.png',
  //   title: 'Title 6',
  // },
]

class OurAssociates extends React.PureComponent {
  static contextTypes = {
    intl: PropTypes.object.isRequired,
  };
  constructor (props) {
    super(props)
    this.state = {
      hoverNum: null,
    }
  }
  onMouseOver = i => {
    this.setState({
      hoverNum: i,
    })
  }
  onMouseOut = () => {
    this.setState({
      hoverNum: null,
    })
  }
  getEnter = e => {
    const i = e.index
    const r = (Math.random() * 2) - 1
    const y = (Math.random() * 10) + 5
    const delay = Math.round(Math.random() * (i * 50))
    return [
      { delay, opacity: 0.4, ...pointPos[e.index], ease: 'easeOutBack', duration: 300 },
      {
        y: r > 0 ? `+=${y}` : `-=${y}`,
        duration: (Math.random() * 1000) + 2000,
        yoyo: true,
        repeat: -1,
      }]
  }
  render () {
    const { hoverNum } = this.state
    let children = [[], [], [], [], []]
    data.forEach((item, i) => {
      const isHover = hoverNum === i
      const pointChild = [
        'point-0 left', 'point-0 right',
        'point-ring', 'point-1', 'point-2', 'point-3',
      ].map(className => (
        <TweenOne
          component="i"
          className={className}
          key={className}
          style={{
            background: item.color,
            borderColor: item.color,
          }}
        />
      ))
      const child = (
        <li key={i.toString()} >
          <div
            className="page3-box"
            onMouseEnter={() => { this.onMouseOver(i) }}
            onMouseLeave={this.onMouseOut}
          >
            <TweenOneGroup
              className="page3-point-wrapper"
              enter={this.getEnter}
              leave={{ x: 0, y: 30, opacity: 0, duration: 300, ease: 'easeInBack' }}
              resetStyleBool={false}
            >
              {(this.props.isMobile || isHover) && pointChild}
            </TweenOneGroup>
            <div
              className="page3-image"
              style={{
                boxShadow: `${isHover ? '0 12px 24px' :
                  '0 6px 12px'} ${item.shadowColor}`,
              }}
            >
              <Avatar src={item.image} alt="img" style={i === 5 ? { marginLeft: -15, width: '140px', height: '80px', borderRadius: '60px' } : { width: '140px', height: '80px' }} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        </li>
      )
      children[Math.floor(i / 5)].push(child)
    })

    children = children.map((item, i) => (
      <QueueAnim
        className="page1-box-wrapper"
        key={i.toString()}
        type="bottom"
        leaveReverse
        delay={[i * 100, (children.length - 1 - i) * 100]}
        component="ul"
      >
        {item}
      </QueueAnim>
    ))
    return (
      <div className="home-page page2" >
        <div className="home-page-wrapper" id="page2-wrapper">
          {/* {!this.props.isMobile && (
            <Parallax
              className="page1-bg"
              animation={{ translateY: 200, ease: 'linear', playScale: [0, 1.65] }}
              location="page1-wrapper"
            >
              Services
            </Parallax>
          )} */}
          <h2>Our <span>Partners</span> </h2>
          <div className="title-line-wrapper page1-line">
            <div className="title-line" />
          </div>
          {/* <OverPack> */}
          {/* <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Card cover={<img alt="example" src={item.image} />} title={item.title} />
              </List.Item>
            )}
          /> */}
          {children}
          {/* </OverPack> */}
        </div>
      </div>
    )
  }
}

export default OurAssociates
