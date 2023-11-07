import React from 'react'
import Main from "./components/Main";
import { Suspense } from "react";
import ShowBtn from "./components/ShowBtn";
import { useGlobalContext } from "./context/ContextApi";
import Loading from "./components/Loading"

const Images = React.lazy(() => import('./components/Images'))

function App() {

  const {loader} = useGlobalContext()

  return (
    <>
      <Main />
      <Suspense fallback={<h1>Lazy Loading</h1>}>
        {loader ? <Loading /> : <Images />}
        
      </Suspense>
      <ShowBtn />
    </>
  );
}

export default App;
