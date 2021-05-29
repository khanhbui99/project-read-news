import React from "react"
import HeaderPage from "./HeaderPage"
import FooterPage from "./FooterPage"
import "./style.scss";



const ContainerUser = ({ children }) => {
    return (
        <div>
            <HeaderPage />
            <div className="container-page">
                {children}
            </div>
            <FooterPage/>
        </div>
    )
}

export default ContainerUser

