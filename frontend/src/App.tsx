import { HeaderAction } from "./components/navbar/HeaderAction"

function App() {
  return (
    <>
      <HeaderAction links={[{ link: "teste", label: "teste", links: [{ link: "teste", label: "teste" }] }]} />
    </>
  )
}

export default App
