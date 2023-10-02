import '../styles/globals.css'
import './prism.css'
import LoadingScreen from '../components/LoadingScreen';
import Head from 'next/head';
import { useEffect,useState } from 'react';
function MyApp({ Component, pageProps }) {
  const [loading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
        if (loader){
          const timer = setTimeout(()=>{
            loader.style.opacity = 0;
            setContentVisible(true);
            
          },3000);
          const timer2 = setTimeout(()=>{
            loader.style.display = "none";
          },4000);
          
        return () =>{
          clearTimeout(timer);
          clearTimeout(timer2);

        }
      }
    }
}, []);
  return (
    <>
      {loading && <LoadingScreen />}
      {contentVisible && (
        <>
          <Head>
            <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
            <meta name="theme-color" content="#121212"/>
            <title>Portfolio | ANSHIL P</title>
          </Head>
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}

export default MyApp
