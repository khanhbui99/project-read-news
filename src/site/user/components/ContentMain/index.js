import React from "react"
import "./style.scss";

const dataTest = [
    {
        id: 1,
        image: 'a',
        title: 'title 1',
    },
    {
        id: 2,
        image: 'b',
        title: 'title 2',
    },
    {
        id: 3,
        image: 'c',
        title: 'title 3',
    },
    {
        id: 4,
        image: 'd',
        title: 'title 4',
    },
    {
        id: 5,
        image: 'e',
        title: 'title 5',
    },
    {
        id: 6,
        image: 'f',
        title: 'title 6',
    },
]

const ContentMain = ({
    isHome,
    item = {}
}) => {
    return (
        <div className="group-content-main" >
            <div className="head-content pt-2">
                <div className="text-conent">
                    <img
                        src={item.image || ""}
                        className="img-hot"
                        alt="ảnh chính trong ngày"
                    />
                    {isHome &&
                        <h2 className="text-justify line-clamp-4 pt-2">
                            {item.title || ''}
                        </h2>
                    }
                </div>
                {
                    isHome &&
                    <span className="text-justify line-clamp-4 mb-5">
                        {item.content || ''}
                    </span>
                }

            </div>
            {!isHome &&

                <div className="news-active flex align-center justify-between mt-4 mb-4">

                    {
                        dataTest.map((item, index) => {
                            return (
                                <div
                                    key={String(index)}
                                    className={index < 3 && 'item-content mr-2' || 'item-content'}
                                    style={{ display: index < 4 && 'block' || 'none' }}
                                >
                                    <img
                                        src={require("resources/images/img_lights.jpg")}
                                        className="img-hot"
                                        alt="ảnh tin mới"
                                    />
                                    <span className="line-clamp-4 ">
                                        {item.title}
                                    </span>
                                </div>
                            )
                        })
                    }

                </div>
            }
        </div>
    )
}

export default ContentMain