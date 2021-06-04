import React from "react"
import { Menu } from "antd"
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { isArray } from "lodash";


const ItemMenu = ({
    indexAvtive,
    changeActiveMenu,
    menuBar,
}) => {
    return (
        <Menu
            mode="horizontal"
            defaultSelectedKeys={[(indexAvtive && indexAvtive || '3')]}
            className=""
            style={{ background: 'transparent', color: '#fff' }}
            color="#fff"
            theme="dark"
        >

            {
                isArray(menuBar) &&
                menuBar.map((item, index) => {
                    return (
                        <Menu.Item key={index + 1}>
                            <Link
                                onClick={() => changeActiveMenu({ index: index + 1, active: item })}
                                to={item.id == 0 ? '/' : `/tin-tuc/${item.slug}`}
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
            indexAvtive = '1',
            menuBar = [],
        },
    } = state;
    return {
        indexAvtive,
        menuBar,
    };
};
const mapDispatchToProps = ({
    menu: { changeActiveMenu },
}) => ({
    changeActiveMenu,
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemMenu);


