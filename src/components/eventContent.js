const EventContent = () =>{

    const onclickElement=()=>{
        console.log("click sur l'element ");
    }

    return <div className='rct-item-content' style={{height:"100%",width:"100%" }}>
       <table className="rct-item-content-table">
        <thead className="rct-item-content-thead">
            <tr>
                <th>PERSONNELLE</th>
                <th>MATERIEL</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td onClick={onclickElement}>Employé 1</td>
                <td>Machine A</td>
            </tr>
            <tr>
                <td>Employé 2</td>
                <td>Machine B</td>
            </tr>
            <tr>
                <td>Employé 3</td>
                <td>Machine C</td>
            </tr>
            <tr>
                <td>Employé 4</td>
                <td>Machine D</td>
            </tr>
            <tr>
                <td>Employé 5</td>
                <td>Machine E</td>
            </tr>
        </tbody>
    </table>
        </div>
}

export default EventContent