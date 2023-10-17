import type { AppProps } from 'next/app';
import GlobalStyle from 'src/styles/globalStyle';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
                <Head>
                    <title>Login</title>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </Head>
                <main>
                    <Component {...pageProps} />
                </main>
                <GlobalStyle />
        </>
    );
}