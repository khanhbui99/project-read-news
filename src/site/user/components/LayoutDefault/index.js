import React from 'react'
import { Layout } from 'antd';
const { Sider, Content } = Layout;


const LayoutDefault = ({
    layoutContent,
    layoutSider
}) => {
    return (
        <Layout>
            <Content className="mr-2" >
                {layoutContent}
            </Content>
            <Sider className="ml-2" width={"30%"} style={{ background: '#c8c8c8' }}>
                {layoutSider}
            </Sider>
        </Layout>

    )
}


export default LayoutDefault