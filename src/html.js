import React from "react"
import faviconApple from './img/favicons/apple-touch-icon.png'
import favicon32 from './img/favicons/favicon-32x32.png'
import favicon16 from './img/favicons/favicon-16x16.png'
import safariPinned from './img/favicons/safari-pinned-tab.svg'
import faviconICO from './img/favicons/favicon.ico'
import Josh from './img/JoshLogoCircle.png'


let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    const image = `https://joshpalacios.com${Josh}`
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="apple-touch-icon" sizes="180x180" href={faviconApple} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          <link rel="mask-icon" href={safariPinned} color="#121212" />
          <link rel="shortcut icon" href={faviconICO} />
          <meta name="msapplication-TileColor" content="#603cba" />
          <meta property="og:title" content="Josh Palacios" />
          <meta property="og:image" content={image}/>
          <meta property="og:description" content="Josh Palacios is a Full Stack Web Developer and Debate Coach based in Houston, Texas" />
          <meta property="og:url" content="https://joshpalacios.com" />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
