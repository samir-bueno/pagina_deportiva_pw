export default function Body({titulo, link, descripcion, parrafo}){
    return(
        <>
        <h2>{titulo}</h2>
        <img src={link} alt={descripcion} />
        <p>{parrafo}</p>
        </>
    )
}