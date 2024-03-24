import "./Input.css"

const Input =(props)=>{

    return(

        <>
        
        <div className="input" >
        <label htmlFor="task" ><h3>Enter Your Task</h3></label>
        <input type="text" placeholder="input task(s)" value={props.value} name="task" id="task" onChange={props.change}/>
        <button type="button" onClick={props.btnFunc}>ADD</button>
        {props.children}
        </div>

        </>
    )
}

export default Input 