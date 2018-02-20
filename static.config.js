import React from 'react'
import axios from 'axios'
import fs from 'fs'
import path from 'path'
import webpack from 'webpack'
import { ReportChunks } from 'react-universal-component'
import flushChunks from 'webpack-flush-chunks'

const resolve = p => path.resolve(__dirname, p)
const nodeModules = resolve('./node_modules')

// for SSR of dynamic imports
const externals = fs
  .readdirSync(nodeModules)
  .filter(
    moduleName =>
      !/\.bin|require-universal-module|react-universal-component|webpack-flush-chunks/.test(
        moduleName,
      ),
  )
  .reduce((externals, moduleName) => {
    externals[moduleName] = moduleName
    return externals
  }, {})

export default {
  getSiteProps: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('http://magnusapi.herokuapp.com/post?state=published&type=blog')
    const { data: doctorInterview } = await axios.get('http://magnusapi.herokuapp.com/post?state=published&type=doctor_interview')
    const { data: patientSnippets } = await axios.get('http://magnusapi.herokuapp.com/post?state=published&type=patient_snippets')
    const { data: patientStories } = await axios.get('http://magnusapi.herokuapp.com/post?state=published&type=patient_stories')
    const { data: featuredOnHomepage } = await axios.get('http://magnusapi.herokuapp.com/post?state=published&featuredOnHomepage=true')
    // const { data: hospitals } = await axios.get('http://magnusapi.herokuapp.com/hospital')
    // const { data: doctors } = await axios.get('http://magnusapi.herokuapp.com/doctor')
    const homepageData = {
      snippets: patientSnippets,
      featured: featuredOnHomepage
    }
    // console.log(`featuredOnHomPage ::  ${JSON.stringify(featuredOnHomepage)}`)
    // console.log(`Homepage Data ::  ${JSON.stringify(homepageData)}`)
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          homepageData
        })
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/contact',
        component: 'src/containers/Contact',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts, doctorInterview,
        }),
        children: posts.map(post => ({
          path: `/post/${post.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        path: '/patientstories',
        component: 'src/containers/PatientStories',
        getData: () => ({
          patientStories,
        }),
        children: patientStories.map(post => ({
          path: `/post/${post.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: (renderToString, App, meta, prodStats) => {
    const chunkNames = []
    const appHtml = renderToString(
      <ReportChunks report={chunkName => chunkNames.push(chunkName)}>
        <App />
      </ReportChunks>,
    )

    const { scripts } = flushChunks(prodStats, {
      chunkNames,
    })

    meta.scripts = scripts.filter(script => script.split('.')[0] !== 'app')
    return appHtml
  },
  Document: ({ Html, Head, Body, children, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Body className="slug-home">
        {children}
        {renderMeta.scripts &&
          renderMeta.scripts.map(script => <script type="text/javascript" src={`/${script}`} />)}
      </Body>
    </Html>
  ),
  webpack: (config, { stage }) => {
    if (stage === 'node') {
      config.externals = externals

      config.plugins.push(
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1,
        }),
      )
    }

    if (stage === 'prod') {
      config.output.filename = 'app.[chunkHash:6].js'
      config.output.chunkFilename = '[name].[chunkHash:6].js'

      config.plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
          name: 'bootstrap',
          filename: 'bootstrap.[chunkHash:6].js',
          minChunks: Infinity,
        }),
      )
    }

    return config
  },
}
