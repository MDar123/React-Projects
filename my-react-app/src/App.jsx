import TabButton from "./Components/TabButton/TabButton";


export default function App(){
  const data = 'Ali';
  return(
    <>
    <h1>Hello World</h1>
    <TabButton name={data} />
    </>
  )
}