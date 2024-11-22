import { Link } from "react-router-dom";
import './login.css'
import { useState } from "react";
function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return <LoginInfo><section className="login-page">
        <div className="container">
            <div className="login-form">
                <h1>Login in to your account..!</h1>
                <p>
                    Login to admin panel to control site.
                </p>
                <form>
                    <div className="form-group inputWithIcon">
                        <input type="email" placeholder="Email *" />
                        <svg className="fa-envelope" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 256 256">
                            <g fill="#676363" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                                <g transform="scale(5.33333,5.33333)">
                                    <path d="M10.5,8c-3.57194,0 -6.5,2.92806 -6.5,6.5v19c0,3.57194 2.92806,6.5 6.5,6.5h27c3.57194,0 6.5,-2.92806 6.5,-6.5v-19c0,-3.57194 -2.92806,-6.5 -6.5,-6.5zM10.5,11h27c1.95006,0 3.5,1.54994 3.5,3.5v1.10547l-17,9.18945l-17,-9.18945v-1.10547c0,-1.95006 1.54994,-3.5 3.5,-3.5zM7,19.01563l16.28711,8.80469c0.44489,0.24028 0.98089,0.24028 1.42578,0l16.28711,-8.80469v14.48438c0,1.95006 -1.54994,3.5 -3.5,3.5h-27c-1.95006,0 -3.5,-1.54994 -3.5,-3.5z"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="form-group inputWithIcon">
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder="Password *"
                        />
                        <svg className="fa-envelope" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                            <path d="M 25 2 C 17.832484 2 12 7.8324839 12 15 L 12 21 L 8 21 C 6.3550302 21 5 22.35503 5 24 L 5 47 C 5 48.64497 6.3550302 50 8 50 L 42 50 C 43.64497 50 45 48.64497 45 47 L 45 24 C 45 22.35503 43.64497 21 42 21 L 38 21 L 38 15 C 38 7.8324839 32.167516 2 25 2 z M 25 4 C 31.086484 4 36 8.9135161 36 15 L 36 21 L 14 21 L 14 15 C 14 8.9135161 18.913516 4 25 4 z M 8 23 L 42 23 C 42.56503 23 43 23.43497 43 24 L 43 47 C 43 47.56503 42.56503 48 42 48 L 8 48 C 7.4349698 48 7 47.56503 7 47 L 7 24 C 7 23.43497 7.4349698 23 8 23 z M 13 34 A 2 2 0 0 0 11 36 A 2 2 0 0 0 13 38 A 2 2 0 0 0 15 36 A 2 2 0 0 0 13 34 z M 21 34 A 2 2 0 0 0 19 36 A 2 2 0 0 0 21 38 A 2 2 0 0 0 23 36 A 2 2 0 0 0 21 34 z M 29 34 A 2 2 0 0 0 27 36 A 2 2 0 0 0 29 38 A 2 2 0 0 0 31 36 A 2 2 0 0 0 29 34 z M 37 34 A 2 2 0 0 0 35 36 A 2 2 0 0 0 37 38 A 2 2 0 0 0 39 36 A 2 2 0 0 0 37 34 z"></path>
                        </svg>
                        <i
                            className={`fa-regular  ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'}`}
                            onClick={togglePasswordVisibility}
                            style={{ cursor: 'pointer' }}
                        ></i>
                    </div>
                    <div className="login-list">
                        <div className="login-remember">
                            <input type="checkbox" />
                            <label for="rememberMe">Remember me</label>
                        </div>

                        <Link>Forget Password ?</Link>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="login-background">
                <img
                    src={
                        process.env.PUBLIC_URL +
                        "/photos/257cdf6122cadf5b56b96eddf37c41ea.png"
                    }
                    alt="login-background"
                />
            </div>
        </div>
    </section></LoginInfo>
}
export function LoginInfo({ children }) {
    return children
}
export default Login