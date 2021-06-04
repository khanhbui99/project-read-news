import React, { useEffect, useState } from 'react'
import {
    ContainerUser,
    ContentMain,
    CarouselRelease,
    LayoutDefault,
    ContentSidebar
} from "site/user/components"
import { connect } from "react-redux"
import { isArray } from 'lodash'
import "./style.scss";


const HomeScreen = ({
    highlights,
    seeMore,
    allNew,
    getMenuBar,
    getNewPost,
    newPost
}) => {
    const [activeNew, setActiveNew] = useState({})
    const [newShow, setNewShow] = useState({})
    const [dataCousel, setDataCarousel] = useState([])
    useEffect(() => {
        getMenuBar();
        getNewPost()
    }, [])

    useEffect(() => {
        let arr = []
        isArray(newPost) &&

            newPost.map((item, index) => {
                if (index == 0) {
                    setActiveNew({ ...item });
                } else {
                    arr.push({ ...item })
                }
            })

        setNewShow({ titles: "", data: [...arr] })
        setDataCarousel([
            {
                title: "Nổi bật",
                leg: isArray(highlights) && highlights.length || 0,
                data: isArray(highlights) && highlights || []
            },
            {
                title: "Đọc nhiều 24h",
                leg: isArray(seeMore) && seeMore.length || 0,
                data: isArray(seeMore) && seeMore || []
            }

        ])


    }, [newPost, highlights])


    return (
        <ContainerUser>
            <LayoutDefault
                layoutContent={
                    <ContentMain
                        isHome={true}
                        item={activeNew || {}}
                    />
                }
                layoutSider={<>
                    <ContentSidebar
                        styleMenu={1}
                        hidenTitle={true}
                        item={newShow || {}}
                        showItem={6}
                        isScorll={true}
                    />
                </>}
            />
            <div className="mb-5"/>
            {
                
                dataCousel.map((item, index) => {
                    if (item.leg > 0) {
                        return <div key={String(index)} className=" mb-3">
                            <div className="group-title">
                                <span>{item.title || ''}</span>
                            </div>
                            <CarouselRelease data={item.data || []} />
                        </div>
                    }
                    return <div />
                })
            }

        </ContainerUser>
    )
}

const mapStateToProps = (state) => {
    const {
        allNews: {
            highlights = [],
            seeMore = [],
            allNew = [],
            newPost = []
        },
    } = state;
    return {
        highlights,
        seeMore,
        allNew,
        newPost
    };
};
const mapDispatchToProps = ({
    allNews: { getMenuBar, getNewPost },
}) => ({
    getMenuBar,
    getNewPost
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
