import Header from "./components/Header"
import BoxSection from "./components/BoxSection"
import Footer from "./components/Footer"
import ListContextProvider from "./store/list-context"
import { useEffect } from "react"


function App() {
  useEffect(() => {
  alert('This is Just an Example of a Chrome Extension built with ReactJS and chromeAPIs and lacks the features of a full fledged chrome extension like storing urls and redriecting to them.');
  }, []);
  return (
    <ListContextProvider >
      <Header />
      <BoxSection/>
      <Footer />
    </ListContextProvider>
  )
}

export default App
