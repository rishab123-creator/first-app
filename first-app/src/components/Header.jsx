import './Header.css'

export default function Header(b){//the b is the prop(just like parameters and arguments)
    return(
   <div className="header">
    <h1>
        {b.title}
    </h1>
    <nav className="navbar">
        <a  href="#">Home</a>
        <a href="#">Dashboard</a>
        <a href="#">Products</a>
    </nav>
   </div>
    )
}