/* eslint-disable react/prop-types */
export default function Header(props){
return(
    <>
    {console.log(props)}
    <button onClick={props.user}> Please Click Me </button>
    <ul>
        {
            props.users.map( (value,index)=>(
                <li key={index}> {value} </li>
            )
            )
                
        }
    </ul>
    </>
)
}