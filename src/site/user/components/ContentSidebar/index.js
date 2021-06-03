import React from "react"
import "./style.scss";


const ContentSidebar = ({
    styleMenu = 2,
    hidenTitle = false
}) => {
    return (
        <div className="group-siled">
            {styleMenu == 1 &&
                <div className="style-1 ">
                    {
                        !hidenTitle && <h4 className="line-clamp-4 title background-default">
                            Loạt ca nhiễm Covid mới ở Việt Nam
                        </h4>
                    }

                    <div className={!hidenTitle && "content pr-2 pl-2" || "content mt-2"}>
                        <div className="item-content flex mb-2">
                            <img
                                src={require("resources/images/img_lights.jpg")}
                                className="img-hot pr-3"
                                alt="ảnh tin mới"
                            />
                            <p className="line-clamp-4 f-14 mb-0">
                                ên, sau đó sư thầy đã trả lại vì bị bà Giàu đe dọa. Bà Hằng còn cho biết có một lần vợ chồng bà mang đồ từ thiện ở chùa Phước Sơn vào buổi tối thì bị giang hồ của bà Giàu bao vây. Ông Dũng phải gọi công an Đồng
                                </p>
                        </div>
                        <div className="item-content flex mb-2">
                            <img
                                src={require("resources/images/img_lights.jpg")}
                                className="img-hot pr-3"
                                alt="ảnh tin mới"
                            />
                            <p className="line-clamp-4 f-14 mb-0">
                                ên, sau đó sư thầy đã trả lại vì bị bà Giàu đe dọa. Bà Hằng còn cho biết có một lần vợ chồng bà mang đồ từ thiện ở chùa Phước Sơn vào buổi tối thì bị giang hồ của bà Giàu bao vây. Ông Dũng phải gọi công an Đồng
                                </p>
                        </div>
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