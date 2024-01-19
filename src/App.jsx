import Header from "./components/Header"
import BoxSection from "./components/BoxSection"
import Footer from "./components/Footer"
import ListContextProvider from "./store/list-context"


function App() {
  return (
    <ListContextProvider >
      <Header />
      <BoxSection/>
      <Footer />
    </ListContextProvider>
  )
}

export default App
