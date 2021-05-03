function Palette({color, index}) {
    return (
        <div className="box" style ={{background: color, opacity: index}}></div>
    )
}
export default Palette;
