import { isArray } from "lodash";
import React from "react"
import "./style.scss";


const ContentSidebar = ({
    styleMenu = 2,
    hidenTitle = false,
    item = {},
    showItem = 4,
    isShowFull = true,
    isScorll = false
}) => {
    return (
        <div className="group-siled">
            {styleMenu == 1 &&
                <div className="style-1 ">
                    {
                        !hidenTitle && <h4 className="line-clamp-4 title background-default">
                            {item.titles || ''}
                        </h4>
                    }
                    <div
                        className={
                            !hidenTitle && "content pr-2 pl-2 scroll" || "content mt-2 scroll"
                            // isScorll && 'scroll'
                        }
                        style={{
                            height: isScorll && showItem * 90
                        }}
                    >
                        {
                            isArray(item.data) &&
                            item.data.map((item2, index) => {
                                if (!isShowFull) {
                                    if (showItem >= (index + 1))
                                        return (
                                            <div key={String(index)} className="item-content flex mb-2">
                                                <div style={{ width: 120 }}>
                                                    <img
                                                        src={item2.image || ''}
                                                        className="img-hot pr-3"
                                                        alt="ảnh tin mới"
                                                    />
                                                </div>

                                                <p className="line-clamp-4 f-14 mb-0">
                                                    {item2.title || ''}
                                                </p>
                                            </div>
                                        )
                                } else {
                                    return (
                                        <div key={String(index)} className="item-content flex mb-2">
                                            <div style={{ width: 120 }}>
                                                <img
                                                    src={item2.image || ''}
                                                    className="img-hot pr-3"
                                                    alt="ảnh tin mới"
                                                />
                                            </div>

                                            <p className="line-clamp-4 f-14 mb-0">
                                                {item2.title || ''}
                                            </p>
                                        </div>
                                    )
                                }

                            })
                        }
                    </div>

                </div>

            }

            {styleMenu == 2 &&
                <div className="style-2 ">

                    <div className="title-txt mb-4">
                        <h4 className="title mb-1">
                            Tin mới
                        </h4>
                        <div className="dot_" />
                    </div>

                    <div className="content">
                        <div className="item-content pt-2 pb-2">
                            <label className="mb-0">Xã hội</label>
                            <p className="line-clamp-4 f-14 mb-0">
                                Dên, sau đó sư thầy đã trả lại vì bị bà Giàu đe dọa df sdf s fs df f sdf sf sd f .
                                </p>
                        </div>
                        <div className="item-content pt-2 pb-2">
                            <label className="mb-0">Xã hội</label>
                            <p className="line-clamp-4 f-14 mb-0">
                                Dên, sau đó sư thầy đã trả lại vì bị bà Giàu đe dọa df sdf s fs df f sdf sf sd f .
                                </p>
                        </div>
                    </div>
                </div>

            }


        </div >
    )
}

export default ContentSidebar