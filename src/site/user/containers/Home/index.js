import React, { useEffect, useState } from 'react'
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
    const [dataAllNew, setDataAllNew] = useState([])

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


        getIdActive(highlights, newPost, seeMore);
    }, [newPost, highlights])

    const getIdActive = (highlights = [], newPost = [], seeMore = []) => {
        let idActive = []
        let arr = []

        const idHig = highlights.map(item => item.id);
        const idNewPost = newPost.map(item => item.id)
        const idSeeM = seeMore.map(item => item.id);

        idActive = idHig.concat(idNewPost.concat(idSeeM))

        allNew.map((item) => {
            const filer = idActive.filter(id => id == item.id)
            if (filer.length) return
            else arr.push(item)
        })

        setDataAllNew([...arr])

    }


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
            <div className="mb-5" />
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
                    return <div key={String(index)}/>
                })
            }
            <div>
                <LayoutDefault
                    layoutContent={
                        isArray(dataAllNew) && dataAllNew.length &&
                        <div>
                            <div className="group-title mt-5">
                                <span>{'Liên quan'}</span>
                            </div>
                            <div className="flex justify-between flex-wrap">
                                {
                                    dataAllNew.map((item, index) => {
                                        return <div key={String(index)} style={{ width: 220, }}>
                                            <ItemShow item={item} />
                                        </div>
                                    })
                                }

                            </div>
                        </div>
                    }
                    layoutSider={<div className="mt-5">
                        <Covid19 />
                    </div>}
                />
            </div>


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
