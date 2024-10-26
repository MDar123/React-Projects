import Header from "./Components/Header/Header";

export default function App(){
  const user = ['a','b','c']
  function jugar(value){
  console.log(value);
  }
  return(
    <>
    <Header user = { ()=> jugar('asad')} users = {user} />
    </>
  )
}