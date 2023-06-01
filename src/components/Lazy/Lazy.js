import { lazy, Suspense } from 'react'
import Loading from './Loading'

const LazyC = lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./LazyEmbed.js")), 500);
    });
  });

//import returns a Promise
//setTimeout does not. So lazy(() => {setTimeout(import("./home"), 300);}) cannot be used to delay the loading
//So for using seTimeout as a Delay an arbitrary promise need to be created which passes the resolve and resolves the import("./LazyEmbed.js")

function Lazy() {
    return (
        <>
            <div>Lazy at {Date.now()}</div>
            <Suspense fallback={<Loading />}>
                <LazyC />
            </Suspense>
        </>
    )
}

export default Lazy