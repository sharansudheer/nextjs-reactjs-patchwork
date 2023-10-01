import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import loader from "../components/loading";
class MyDocument extends Document {
  render() {
    return (
      <Html id="main">
        <Head/>
          <body>
          <Main/>
          <NextScript/>
          </body>
      </Html>
        )
    }
}

export default MyDocument