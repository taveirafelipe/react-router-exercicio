import { useNavigate } from "react-router-dom"
import { goToHome } from "../routes/coordinator";
import { goToProfile } from "../routes/coordinator";

export const Header = () => {
    const navigate = useNavigate();
    const name = "felipe"
    return (
        <div>
            <button onClick={() => goToHome(navigate)}>Página inicial</button>
            <button onClick={() => goToProfile(navigate, name)} >Perfil</button>
        </div>
    )
}