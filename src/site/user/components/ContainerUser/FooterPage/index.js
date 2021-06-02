import React from 'react'

const dataFooter = [
    {
        label: "LIÊN HỆ",
        data: ["NT: Nguyễn Tiến Anh", "Email: khanhbuix9@gmail.com", 'Sdt: 0974.362.511'],
        align: "left"
    },
    {
        label: "THÀNH VIÊN",
        data: ["Nguyễn Tiến Anh", "Trịnh Lan Anh", 'Đỗ Ngọc Ánh', 'Nguyễn Đức Long', 'Bùi Duy Khánh']
    },
]

const FooterPage = () => {
    return (
        <div>
            <div className="background-default">
                <div
                    className="container-page flex align-center justify-between"
                    style={{ height: 50 }}
                >
                    <span style={{ fontSize: '1.5rem' }}>
                        Nhóm .......
                    </span>
                    <span style={{ fontSize: '1.5rem' }}>
                        Website - Đọc Báo
                    </span>
                </div>
            </div>
            <div className="container-page flex mt-3">
                {
                    dataFooter.map((item, index) => {
                        return (
                            <div style={{ textAlign: item.align || "center" }} key={String(index)} className="mr-4">
                                <label
                                    className="mb-0"
                                    style={{ fontSize: "1rem", fontWeight: 600 }}
                                >{item.label}</label>
                                <div
                                    style={{
                                        width: 25,
                                        borderBottom: 1,
                                        borderColor: '#021052',
                                        borderWidth: 1,
                                        borderStyle: 'solid',
                                        margin: item.align ? 0 : 'auto'
                                    }}
                                />
                                <div className="mt-2">
                                    {item.data.map((item2, index2) => {
                                        return <p className="mt-1 mb-0" key={String(index2)}>{item2}</p>
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default FooterPage