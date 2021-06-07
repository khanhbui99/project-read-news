import React, { useEffect, useState } from 'react'
import {
    useParams
} from "react-router-dom";
import {
    ContainerUser,
    ContentMain,
    CarouselRelease,
    LayoutDefault,
    ContentSidebar,
    ItemShow,
    Covid19
} from "site/user/components"
import { connect } from "react-redux"



const DetailsNews = ({
    getNewPost,
    newPost,
    seeMore,
    getMenuBar
}) => {
    let { id } = useParams();
    const [newShow, setNewShow] = useState({})


    useEffect(() => {
        getNewPost()
        getMenuBar();
    }, [])

    return (
        <ContainerUser>
            <LayoutDefault
                layoutContent={
                    <div>
                        this is page details news {id}
                    </div>
                }
                layoutSider={<>
                    <ContentSidebar
                        styleMenu={2}
                        item={{
                            titles: "Đọc nhiều",
                            data: [...seeMore]
                        }}
                    />
                    <div className="mb-5" />
                    <ContentSidebar
                        styleMenu={2}
                        item={{
                            titles: "Tin Mới",
                            data: [...newPost]
                        }}
                    />
                    <Covid19 />
                    <div className="mb-5" />
                </>}
            />

        </ContainerUser>

    )
}

const mapStateToProps = (state) => {
    const {
        allNews: {
            newPost = [],
            seeMore = [],
        },
    } = state;
    return {
        newPost,
        seeMore
    };
};
const mapDispatchToProps = ({
    allNews: { getNewPost, getMenuBar },
}) => ({
    getNewPost,
    getMenuBar
});
export default connect(mapStateToProps, mapDispatchToProps)(DetailsNews);
