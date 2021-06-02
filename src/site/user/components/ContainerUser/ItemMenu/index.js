import React from "react"
import { Menu } from "antd"
import { Link } from "react-router-dom";
import { connect } from "react-redux"
const dataTest = [
    {
        name: 'Home',
        path: "/",
        isIcon: false,
        icon: ""
    },
    {
        name: 'Tab 1',
        path: "/tab-1",
        isIcon: false,
        icon: ""
    },
    {
        name: 'Tab 2',
        path: "/tab-2",
        isIcon: false,
        icon: ""
    }
]


const ItemMenu = ({ activeMenu, changeActiveMenu }) => {
    return (
        <Menu
            mode="horizontal"
            defaultSelectedKeys={[(activeMenu && activeMenu || '3')]}
            className=""
            style={{ background: 'transparent', color: '#fff' }}
            color="#fff"
            theme="dark"
        >

            {
                dataTest.map((item, index) => {
                    return (
                        <Menu.Item key={index + 1}>
                            <Link
                                onClick={() => changeActiveMenu(index + 1)}
                                to={item.path}
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


