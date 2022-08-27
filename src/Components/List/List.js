const List = ( { datos} ) => {
    return datos.map((ordenes, key)=>{
        return <li key={key}>{ordenes.name} - {ordenes.orden} - {ordenes.hora} </li>
    })
};

export default List;