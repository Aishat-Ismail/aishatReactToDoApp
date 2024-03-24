
const Tasks = (props) => {

    return (

        <>
            <div className="task">
                <h2>MY TASKS</h2>
                <ol>
                    {props.task}
                </ol>
            </div>

        </>
    )

}

export default Tasks