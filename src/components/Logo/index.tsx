import { Link } from "@tanstack/react-router"
import LogoImage from "@/assets/images/logo.png"

export const Logo = () => {
    return (
        <Link to={"/"} className="self-center">
            <img src={LogoImage} alt="Syntaxewear brand logo with stylized text in a minimalist layout" className="w-40 " />
        </Link>
    )
}