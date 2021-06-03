import React from 'react'
import { ContainerUser, ContentMain, LayoutDefault, ContentSidebar } from "site/user/components"



const HomeScreen = () => {
    return (
        <ContainerUser>
            <LayoutDefault
                layoutContent={<ContentMain />}
                layoutSider={<>
                    <ContentSidebar
                        styleMenu={1}
                        hidenTitle={true}
                    />
                    <ContentSidebar styleMenu={2} />
                </>}
            />
        </ContainerUser>
    )
}


export default HomeScreen