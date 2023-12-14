import { useState } from "react";
import Banner from "../components/Banner"

const Register = () => {

    // Estados
    const [username, setUsername] = useState("");
    const [photo, setPhoto] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        
        <>      
        
        <Banner title="Crear Cuenta" />           

        <div className="container">            
            
            <form className="form__register">
                <div className="container__input">
                    {/* Username */}
                    <div className="form__group">
                        <i className="fa-solid fa-user form__icon"></i>
                        <input 
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="form__input"
                            autoComplete="off"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    {/* Fotografia */}
                    <div className="form__group">
                        <i className="fa-solid fa-user form__icon"></i>
                        <input 
                            type="text"
                            name="photo"
                            placeholder="Fotografía"
                            className="form__input"
                            autoComplete="off"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)} />
                    </div>

                    {/* Correo */}
                    <div className="form__group">
                        <i className="fa-solid fa-envelope form__icon "></i>
                        <input 
                            type="email"
                            name="email"
                            placeholder="Correo"
                            className="form__input"
                            autoComplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    {/* Contraseña */}
                    <div className="form__group">
                        <i className="fa-solid fa-lock form__icon "></i>
                        <input 
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            className="form__input"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>

                {/* Botón de crear usuario */}
                <div className="container__button">
                    <input 
                        type="submit" 
                        value={'Crear usuario'} 
                        className="form__button" />
                </div>
            </form>            
            
        </div>

        </>
    )
}

export default Register;