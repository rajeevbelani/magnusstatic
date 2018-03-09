import React from 'react'
import Heading from 'grommet/components/Heading'
import Hero from 'grommet/components/Hero'
import Footer from 'grommet/components/Footer'
import Section from 'grommet/components/Section'
import Button from 'grommet/components/Button'
import Markdown from 'grommet/components/Markdown'
import Card from 'grommet/components/Card'
import FormField from 'grommet/components/FormField'
import SocialShare from 'grommet/components/SocialShare'
import Label from 'grommet/components/Label'
import HeadLine from 'grommet/components/Headline'
import Paragraph from 'grommet/components/Paragraph'
import Box from 'grommet/components/Box'
import LinkNext from 'grommet/components/icons/base/FormNextLink'
import { getBlogTypeString, getBlogLink, getBlogHeading, getBlogShortDescription, getBlogImage, getBlogDescription, getBlogAuthor, getBlogAuthorDescription, getBlogFullLink, getNextBlogTitle } from './util'
import { withRouteData, Link } from 'react-static'


export default withRouteData(({ post }) => (
  <Box>
    <Section pad="none" align="center" colorIndex="light-2">
      <Box
        size={{ width: 'xxlarge' }}
        pad={{ horizontal: 'medium', vertical: 'medium' }}
        colorIndex="light-2"
      >
        <Heading>{`${getBlogHeading(post)}`} </Heading>
        <Heading strong tag="h4">{`${getBlogShortDescription(post)}`} </Heading>
        {/* <Heading tag="h2">{`${post.content.extended.md}`} </Heading> */}
        <Hero size="small" backgroundImage={`${getBlogImage(post)}`} />
      </Box>
    </Section>
    <Section pad="none" align="center" colorIndex="light-2">

      <Box
        direction="row"
        justify="center"
        size={{ width: 'xxlarge' }}
        pad={{ horizontal: 'large', vertical: 'medium', between: 'large' }}
        colorIndex="light-1">
        <Box>
          <Paragraph>
            <Markdown components={{
              h1: { props: { strong: true } },
              h2: { props: { strong: true } },
              p: { props: { size: 'large' } },
              li: { props: { strong: true } },
              ul: { props: { strong: true } },
              img: { props: { size: 'large' } }
            }} content={`${post.content.extended.md}`} />
          </Paragraph>
          {/* <Heading strong tag="h4">
                Dolor eveniet possimus possimus aut praesentium dignissimos sit
                debitis. Fugit minima totam provident optio aliquam! Magni tenetur
                doloremque rem tempore amet voluptatibus ipsum. Eos aliquid
                debitis sed mollitia laudantium sit?
          </Heading>
          <Paragraph size="large" margin="small">
                Sit architecto veritatis neque ex laboriosam, laboriosam?
                Aliquid illum ullam tenetur molestiae veniam velit quam. Facilis
                ipsam hic labore cupiditate illo soluta error molestias corporis
                quia, ipsa. Nobis ipsa nam eius esse illum unde. Veritatis
                tenetur incidunt consectetur dolore blanditiis.
          </Paragraph>
          <Paragraph size="large" margin="small">
                Lorem dolores incidunt similique aliquid rerum reiciendis est!
                Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
                aut consequatur consequuntur sequi delectus quam qui. Illo odio
                dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
                laboriosam, laborum ratione, dicta nihil culpa.
          </Paragraph>
          <Paragraph size="large" margin="small">
                Dolor amet voluptate nisi molestias praesentium. Eveniet
                consectetur aliquid earum reprehenderit nam dicta tempora!
                Maiores nostrum eius quo odit et facere quaerat maxime beatae
                minus nihil expedita non facere ipsa cupiditate minus velit
                beatae. Assumenda nemo quis ad maxime modi.
          </Paragraph> */}
        </Box>
        <Box basis="1/3">
          {/* <Image src="/img/case_study.png" alt="example image" /> */}
          <Box margin={{ top: 'medium' }}>
            <Label size="small" uppercase>The Author</Label>
            <Paragraph size="large" margin="none">
              <strong>{getBlogAuthor(post)}</strong>
            </Paragraph>
            <Paragraph margin="medium" dangerouslySetInnerHTML={{ __html: getBlogAuthorDescription(post) }} />
          </Box>
          <Box
            direction="row"
            justify="between"
            separator="top"
          >
            <Label margin="small" size="small" uppercase>
              <strong>Share</strong>
            </Label>
            <Box
              align="center"
              direction="row"
              responsive={false}
            >
              <SocialShare
                type="email"
                link={getBlogFullLink(post)}
                colorIndex="grey-4"
              />
              <SocialShare
                type="twitter"
                link={getBlogFullLink(post)}
                colorIndex="grey-4"
              />
              <SocialShare
                type="facebook"
                link={getBlogFullLink(post)}
                colorIndex="grey-4"
              />
              <SocialShare
                type="linkedin"
                link={getBlogFullLink(post)}
                colorIndex="grey-4"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Section>
    {/* <Section pad="none" align="center" colorIndex="light-2">
      <Box
        size={{ width: 'xxlarge' }}
        pad={{ horizontal: 'medium', vertical: 'medium' }}
        colorIndex="light-1 ">
        <Hero size="small" backgroundImage={`${getBlogImage(post)}`} />
        <Paragraph margin="small" dangerouslySetInnerHTML={{ __html: post.content.extended.html }} />
      </Box>
    </Section> */}


    {/* <Footer justify='between'>

        <Box direction='row'
          align='center'
          pad={{"between": "medium"}}>
          <Paragraph margin='none'>
            © 2016 Grommet Labs
          </Paragraph>

        </Box>
      </Footer> */}
    <Footer>
      <Section
        align="center"
        
        colorIndex="grey-4"
        full="horizontal"
      >
        <Box
          align="center"
          direction="row"
          size={{ width: 'xxlarge' }}
          flex="grow"
        >
          {/* <Box basis="1/2" pad={{ horizontal: 'large' }}> */}
          {/* <Label uppercase>Share the article</Label> */}
          <Card
            contentPad="large"
            heading="Connect with us"

            link={<Link to={'/contact'}><Button icon={<LinkNext />} primary href="  " label="Send Enquiry" /></Link>}
            separator="right"
          />
          {post.nextPost !== undefined && post.nextPost !== null && <Card
            pad={{ horizontal: 'large' }}
            contentPad="medium"
            heading={post.nextPost.title}
            label="Recommended Post"
            basis="1/2"
            link={
              <Link to={getBlogLink(post.nextPost)} primary>
                    Learn More
              </Link>
            } />}
          {/* <Box direction="row" margin={{ top: 'medium' }} responsive={false}>
              <SocialShare type="email" link="http://www.grommet.io/docs/" />
              <SocialShare type="twitter" link="http://www.grommet.io/docs/" />
              <SocialShare type="facebook" link="http://www.grommet.io/docs/" />
              <SocialShare type="linkedin" link="http://www.grommet.io/docs/" />
            </Box> */}
          {/* </Box> */}
          
        </Box>
      </Section>
    </Footer>
  </Box>
  // <div>
  //   <Link to="/blog/">{'<'} Back</Link>
  //   <br />
  //   <DetailsPage />
  //   <h3>{post.title}</h3>
  //   <p dangerouslySetInnerHTML={{ __html: post.content.brief.html }} />
  // </div>
))
