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
}) => {
    return (
        <div className="group-content-main" >
            <div className="head-content pt-2">
                <div className="text-conent">
                    <img
                        src={require("resources/images/img_lights.jpg")}
                        className="img-hot"
                        alt="ảnh chính trong ngày"
                    />
                    <h2 className="text-justify line-clamp-4">
                        NÓNG: TP.HCM ghi nhận thêm 18 ca dương tính mới, trong đó có 1 nhân viên y tế ở BV Nam Sài Gòn
                        </h2>

                </div>
                <span className="text-justify line-clamp-4">
                    Bà chủ của khu du lịch Đại Nam cũng cho biết bà từng tặng thầy Bửu Chánh, sư thầy chùa Phước Sơn một chiếc xe hơi. Tuy nhiên, sau đó sư thầy đã trả lại vì bị bà Giàu đe dọa.

                    Bà Hằng còn cho biết có một lần vợ chồng bà mang đồ từ thiện ở chùa Phước Sơn vào buổi tối thì bị giang hồ của bà Giàu bao vây. Ông Dũng phải gọi công an Đồng Nai đến giải cứu.

                    "Tôi sẽ chứng minh cho mọi người thấy những gì tôi nói là đúng hay sai, bao nhiêu nhân chứng sẵn sàng đứng ra để bảo vệ tôi, để nói lên tiếng nói bà Lê Thị Giàu là người như thế nào trước công chúng", bà Hằng tuyên bố.
                    </span>
            </div>
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
        </div>
    )
}

export default ContentMain