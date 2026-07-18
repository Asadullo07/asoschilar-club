import "./footer.css"
import logofoot from "../../assets/Group 1321314088.png"
const Footer = () => {
	return (
		<footer>
			<img src={logofoot} alt="" />
			<h3>ASOSCHILAR CLUB ©  2024</h3>
			<div className="contacts-tel">
				<i class="fa-brands fa-telegram"></i>
				<i class="fa-brands fa-instagram"></i>
				<p>+998 99 033 99 38</p>
			</div>
		</footer>
	)
}

export default Footer