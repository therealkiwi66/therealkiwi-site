import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Aggiungi il link alla favicon */}
          <link rel="icon" href="/favicon.ico" />

        <script
            data-queue-fair-client="prismatikaio"
            src="https://files.queue-fair.net/queue-fair-adapter.js"
          ></script>
              
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
