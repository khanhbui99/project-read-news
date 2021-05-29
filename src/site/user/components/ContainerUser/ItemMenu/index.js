import React from "react"
import { Menu } from "antd"
import { Link } from "react-router-dom";
import { connect } from "react-redux"
const dataTest = [
    {
        name: 'nav 1',
        path: "",
        isIcon: false,
        icon: ""
    },
    {
        name: 'nav 2',
        path: "",
        isIcon: false,
        icon: ""
    },
    {
        name: 'nav 3',
        path: "",
        isIcon: false,
        icon: ""
    }
]


const ItemMenu = ({ activeMenu, changeActiveMenu }) => {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[(activeMenu && activeMenu || '3')]} className="">

            {
                dataTest.map((item, index) => {
                    return (
                        <Menu.Item key={index + 1}>
                            <Link
                                onClick={() => changeActiveMenu(index + 1)}
                                to={'/'}
                                title={item.name}
                                className=" waves-effect waves-themed"
                            >
                                <span className="nav-link-text">
                                    {item.name}
                                </span>
                            </Link>
                        </Menu.Item>
                    )
                })
            }

        </Menu>

    )
}

const mapStateToProps = (state) => {
    const {
        menu: {
            activeMenu = '1',
        },
    } = state;
    return {
        activeMenu,
    };
};
const mapDispatchToProps = ({
    menu: { changeActiveMenu },
}) => ({
    changeActiveMenu,
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemMenu);


