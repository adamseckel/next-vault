import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  constructor(props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="Manage your Destiny 2 items from the browser"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <style> @import url('https://use.typekit.net/jin5auh.css');</style>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <title> vault </title>
        </Head>
        <body
          style={{
            margin: 0,
            padding: 0,
            fontFamily: 'sans-serif',
            backgroundColor: 'white',
          }}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
