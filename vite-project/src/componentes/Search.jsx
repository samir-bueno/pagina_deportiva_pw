export default function Search ({onSearch}) {
    const handleChange = (e) => {
        onSearch(e.target.value);
    };
    return (<input type="text" placeholder="Boca, River... " onChange={handleChange}/>)
}