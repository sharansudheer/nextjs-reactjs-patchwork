import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
class MyDocument extends Document {
    render() {
        return (
            <Html id="main">
                <Head/>
                <head>
                </head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument