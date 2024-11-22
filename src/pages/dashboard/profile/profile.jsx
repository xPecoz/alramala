import './profile.css'
function Profile() {
    return <section className="profile-section">
        <div className="container">
            <div className="profile-header">
                <div className="profile-logo">
                    <div className="profile-background">
                        <img src={process.env.PUBLIC_URL +
                            "/photos/ab5c0dee9d48ebcacfecef8ac3c6b205.png"} />
                    </div>
                    <div className='profile-info'>
                        <h5>John gackpo</h5>
                        <p>Team Leader</p>
                        <p>Riyad, Sudia Arabia</p>
                    </div>
                </div>
                <div className="edit">
                    <span>Edit</span>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.4001 18.1612L11.4001 18.1612L18.796 10.7653C17.7894 10.3464 16.5972 9.6582 15.4697 8.53068C14.342 7.40298 13.6537 6.21058 13.2348 5.2039L5.83882 12.5999L5.83879 12.5999C5.26166 13.1771 4.97307 13.4657 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L7.47918 20.5844C8.25351 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5343 19.0269 10.823 18.7383 11.4001 18.1612Z" fill="#9A7462"></path> <path d="M20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178L14.3999 4.03882C14.4121 4.0755 14.4246 4.11268 14.4377 4.15035C14.7628 5.0875 15.3763 6.31601 16.5303 7.47002C17.6843 8.62403 18.9128 9.23749 19.85 9.56262C19.8875 9.57563 19.9245 9.58817 19.961 9.60026L20.8482 8.71306Z" fill="#9A7462"></path> </g></svg>
                </div>
            </div>
            <div className="profile-footer">
                <h1>Account Details</h1>
                <div className="profile-footer-container">
                    <div className="profile-form">
                        <form>
                            <div className="form-group inputWithIcon">
                                <label>Email</label>
                                <input type="email" placeholder="John gackpo" />
                                <svg className="fa-envelope" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 256 256">
                                    <g fill="#676363" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                                        <g transform="scale(5.33333,5.33333)">
                                            <path d="M10.5,8c-3.57194,0 -6.5,2.92806 -6.5,6.5v19c0,3.57194 2.92806,6.5 6.5,6.5h27c3.57194,0 6.5,-2.92806 6.5,-6.5v-19c0,-3.57194 -2.92806,-6.5 -6.5,-6.5zM10.5,11h27c1.95006,0 3.5,1.54994 3.5,3.5v1.10547l-17,9.18945l-17,-9.18945v-1.10547c0,-1.95006 1.54994,-3.5 3.5,-3.5zM7,19.01563l16.28711,8.80469c0.44489,0.24028 0.98089,0.24028 1.42578,0l16.28711,-8.80469v14.48438c0,1.95006 -1.54994,3.5 -3.5,3.5h-27c-1.95006,0 -3.5,-1.54994 -3.5,-3.5z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="form-group inputWithIcon">
                                <label>Email</label>
                                <input type="email" placeholder="example@gmail.com" />
                                <svg className="fa-envelope" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 256 256">
                                    <g fill="#676363" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                                        <g transform="scale(5.33333,5.33333)">
                                            <path d="M10.5,8c-3.57194,0 -6.5,2.92806 -6.5,6.5v19c0,3.57194 2.92806,6.5 6.5,6.5h27c3.57194,0 6.5,-2.92806 6.5,-6.5v-19c0,-3.57194 -2.92806,-6.5 -6.5,-6.5zM10.5,11h27c1.95006,0 3.5,1.54994 3.5,3.5v1.10547l-17,9.18945l-17,-9.18945v-1.10547c0,-1.95006 1.54994,-3.5 3.5,-3.5zM7,19.01563l16.28711,8.80469c0.44489,0.24028 0.98089,0.24028 1.42578,0l16.28711,-8.80469v14.48438c0,1.95006 -1.54994,3.5 -3.5,3.5h-27c-1.95006,0 -3.5,-1.54994 -3.5,-3.5z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="form-group inputWithIcon">
                                <label>Email</label>
                                <input type="email" placeholder="+966 5054871" />
                                <svg className="fa-envelope" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 256 256">
                                    <g fill="#676363" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                                        <g transform="scale(5.33333,5.33333)">
                                            <path d="M10.5,8c-3.57194,0 -6.5,2.92806 -6.5,6.5v19c0,3.57194 2.92806,6.5 6.5,6.5h27c3.57194,0 6.5,-2.92806 6.5,-6.5v-19c0,-3.57194 -2.92806,-6.5 -6.5,-6.5zM10.5,11h27c1.95006,0 3.5,1.54994 3.5,3.5v1.10547l-17,9.18945l-17,-9.18945v-1.10547c0,-1.95006 1.54994,-3.5 3.5,-3.5zM7,19.01563l16.28711,8.80469c0.44489,0.24028 0.98089,0.24028 1.42578,0l16.28711,-8.80469v14.48438c0,1.95006 -1.54994,3.5 -3.5,3.5h-27c-1.95006,0 -3.5,-1.54994 -3.5,-3.5z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="form-group inputWithIcon">
                                <label>Email</label>
                                <input type="email" placeholder="************" />
                                <svg className="fa-envelope" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 256 256">
                                    <g fill="#676363" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                                        <g transform="scale(5.33333,5.33333)">
                                            <path d="M10.5,8c-3.57194,0 -6.5,2.92806 -6.5,6.5v19c0,3.57194 2.92806,6.5 6.5,6.5h27c3.57194,0 6.5,-2.92806 6.5,-6.5v-19c0,-3.57194 -2.92806,-6.5 -6.5,-6.5zM10.5,11h27c1.95006,0 3.5,1.54994 3.5,3.5v1.10547l-17,9.18945l-17,-9.18945v-1.10547c0,-1.95006 1.54994,-3.5 3.5,-3.5zM7,19.01563l16.28711,8.80469c0.44489,0.24028 0.98089,0.24028 1.42578,0l16.28711,-8.80469v14.48438c0,1.95006 -1.54994,3.5 -3.5,3.5h-27c-1.95006,0 -3.5,-1.54994 -3.5,-3.5z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                           
                        </form>
                         <button>Save changes</button>
                    </div>
                    <div className="line"></div>
                    <div className="profile-pictures">
                        <div className="circle"><img src={process.env.PUBLIC_URL +
                            "/photos/5a178e33aa72ad690140b567642de318.png"} /></div>
                        <div className="circle"><img src={process.env.PUBLIC_URL +
                            "/photos/5a178e33aa72ad690140b567642de318.png"} /></div>
                        <div className="circle"><img src={process.env.PUBLIC_URL +
                            "/photos/5a178e33aa72ad690140b567642de318.png"} /></div>
                        <div className="circle"><img src={process.env.PUBLIC_URL +
                            "/photos/5a178e33aa72ad690140b567642de318.png"} /></div>
                        <div className="circle"><img src={process.env.PUBLIC_URL +
                            "/photos/5a178e33aa72ad690140b567642de318.png"} /></div>
                        <div className="circle"><img src={process.env.PUBLIC_URL +
                            "/photos/5a178e33aa72ad690140b567642de318.png"} /></div>
                        <div className="circle"><img src={process.env.PUBLIC_URL +
                            "/photos/5a178e33aa72ad690140b567642de318.png"} /></div>
                        <div className="circle"><img src={process.env.PUBLIC_URL +
                            "/photos/5a178e33aa72ad690140b567642de318.png"} /></div>
                        <div className="circle"><img src={process.env.PUBLIC_URL +
                            "/photos/5a178e33aa72ad690140b567642de318.png"} /></div>
                        <div className="circle"><img src={process.env.PUBLIC_URL +
                            "/photos/5a178e33aa72ad690140b567642de318.png"} /></div>
                    </div>
                </div>
    
            </div>

        </div>
    </section>
}
export default Profile;