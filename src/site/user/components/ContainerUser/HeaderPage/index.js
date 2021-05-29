import React from "react"
import { Row, Input } from "antd"
import ItemMenu from "../ItemMenu";
import "./style.scss";

const { Search } = Input;


const HeaderPage = () => {
    const onSearch = (txt) => {
        alert(txt)

    }
    return (
        <Row className="header-page">
            <div className="logo-search container-page">
                <a href="/" className="logo">
                    <img src={require("resources/images/logo.png")} alt="iSofH" aria-roledescription="logo" />
                </a>
                <Search placeholder="input search text" allowClear onSearch={onSearch} className="search-input" />
            </div>
            <div style={{ background: '#001529' }} className="mb-3">
                <div className="container-page">
                    <ItemMenu />
                </div>
            </div>

        </Row>
    )
}

export default HeaderPage

