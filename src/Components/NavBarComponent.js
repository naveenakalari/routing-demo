import {Link,Outlet} from 'react-router-dom'
export default function NavBar(){

    return(
        <div>
            <h1>Simple Single Page App</h1>
            <ul>
            <li><Link to="AboutUs">About us</Link></li>
            <li><Link to="Contact">Contact</Link></li>
            <li><Link to="Pricing">Pricing</Link></li>
            <li><Link to='ProductList'>ProductList</Link> </li>
            </ul>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}