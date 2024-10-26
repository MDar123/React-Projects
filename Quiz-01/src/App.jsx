import './App.css';

function App(){
  function showMsg(color){
    alert( `The color You selected is :  ${color}`);
    }
return(
  <>
  <div className="box1" onClick={ () => showMsg('Green')}></div>
  <div className="box2" onClick={ () => showMsg('Red')}></div>
  </>
)
}
export default App;