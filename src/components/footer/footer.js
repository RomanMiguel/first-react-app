import './footer.css'
import facebook from './facebook.png'
import instagram from './instagram.png'

const Footer=()=>{
    
    return(
        <footer>
        <div className="container row">
            <div className="redes col-4">
                <a href="https://www.facebook.com/" target="_blank"><img src={facebook} alt=""/></a>
                <a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt=""/></a>
            </div>

            <div className="datosFooter col-8">
                <li>45665-4565</li>
                <li>romanmiguel@gmail.com</li>
                <li>calle falsa 123</li>
            </div>
        </div>
    </footer>
    )
}
export default Footer;