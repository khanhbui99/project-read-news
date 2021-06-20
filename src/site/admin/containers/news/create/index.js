import React, { useEffect, useState } from "react";
import { Form, Button, Input } from "antd";
import { connect } from "react-redux";
import { AdminPage, Panel } from "site/admin/components/admin";
import ListImage from "site/admin/components/device/ListImage";
import EditorText from "site/admin/components/EditorText";
import FilterSelect from "site/admin/components/common/filterSelect";
import "../style.scss";

const CreteOrEditNew = ({
  createOrEdit,
  history,
  updateData,
  menuBar,
  nameMenu,
  match = {},
  updateViewForNews,
  itemActive = {}
}) => {
  const id = match.params.id;
  // const [checkValidate, setCheckValidate] = useState(false)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [highlight, setHighlight] = useState("0")
  const [image, setImage] = useState("")
  const [author, setAuthor] = useState("")
  const [loai_tin_id, setLoai_tin_id] = useState("")
  const [short_content, setShort_content] = useState("")

  useEffect(() => {
    onResetData();

    if (id) {
      updateViewForNews(id);
    }
  }, []);

  useEffect(() => {

    if (itemActive.id && id) {
      setShort_content(itemActive.short_content || "")
      setLoai_tin_id(itemActive.loai_tin_id || "")
      setAuthor(itemActive.author || "")
      setImage(itemActive.image || "")
      setHighlight(itemActive.highlight || "0")
      setContent(itemActive.content || "")
      setTitle(itemActive.title || "")
    }

  }, [itemActive]);

  const onResetData = () => {
    setShort_content("")
    setLoai_tin_id("")
    setAuthor("")
    setImage("")
    setHighlight("0")
    setContent("")
    setTitle("")
  }
  const onClose = () => {
    history.push("/admin/danh-sach-bai-viet");
  };
  const handleSubmit = (e) => {
    const body = {
      title,
      image,
      content,
      author,
      loai_tin_id,
      short_content,
      highlight
    }

    const val = id ? { ...itemActive } : {};
    createOrEdit({
      ...val,
      ...body,
    }).then((s) => {
      if (s) {
        setTimeout(() => {
          onClose()
        }, 300)
        return;
      }
      return
    });
  };
  return (
    <AdminPage className="mgr-user-create">
      <Panel
        title={id ? "Cập nhật bài viết" : "Thêm mới bài viết"}
        id={"mgr-user-create"}
        allowClose={false}
        allowCollapse={false}
        icon={[<i className="fal fa-users"></i>]}
      >
        <Form layout="vertical" hideRequiredMark>
          <div className="row">
            <div className="col-md-6 col-12">
              <Form.Item label="Tiêu đề (*): ">
                <Input.TextArea
                  onChange={(e) => {
                    setTitle(e.target.value || "")
                  }}
                  value={title}
                  placeholder="Nhập tiêu đề"
                />
                {/* {checkValidate && !item.title ? (
                  <div className="error">Vui lòng nhập tiêu đề!</div>
                ) : null} */}
              </Form.Item>
              <Form.Item label="Mô tả (*): ">
                <Input.TextArea
                  placeholder="Mô tả"
                  value={short_content}
                  onChange={(e) => {
                    setShort_content(e.target.value || "")
                  }}
                  style={{
                    height: 170
                  }}
                />
                {/* {checkValidate && !item.short_content ? (
                  <div className="error">Vui lòng nhập tiêu đề!</div>
                ) : null} */}
              </Form.Item>
            </div>
            <div className="col-md-6 col-12">
              <Form.Item label="Ảnh (*): ">
                <ListImage
                  uploadImage={(e) => {
                    setImage(e)
                  }}
                  files={image}
                  provider="employee"
                />
              </Form.Item>

            </div>
            <div className="col-12">
              <Form.Item label="Nội dung (*): " style={{ width: '100%' }}>
                <EditorText content={content} handleChange={e => setContent(e)} />
              </Form.Item>
              {/* {checkValidate && !item.content ? (
                <div className="error">Vui lòng nhập nội dung!</div>
              ) : null} */}
            </div>
            <div className="col-md-6 col-12">
              <Form.Item label="Thể loại (*):">
                <FilterSelect
                  onChange={(e) => setLoai_tin_id(e)}
                  placeholder="Chọn thể loại"
                  value={nameMenu[loai_tin_id]}
                  listData={(menuBar || []).map(item => {
                    return {
                      ...item,
                      ten: item.name
                    }
                  })}
                />
              </Form.Item>
              {/* {checkValidate && !item.loai_tin_id ? (
                <div className="error">Vui lòng nhập thể loại bài viết!</div>
              ) : null} */}
            </div>
            <div className="col-md-6 col-12">
              <Form.Item label="Nổi bật (*):">
                <FilterSelect
                  onChange={(e) =>
                    setHighlight(e)
                  }
                  value={Number(highlight) == 0 ? "false" : "true"}
                  listData={[{ id: "0", ten: 'false' }, { id: "1", ten: 'true' }]}
                />
              </Form.Item>
            </div>
            <div className="col-md-6 col-12">
              <Form.Item label="Tác giả (*):">
                <Input
                  onChange={(e) => {
                    setAuthor(e.target.value || "")
                  }}
                  value={author}
                  placeholder="Nhập tác giả"
                />
              </Form.Item>
              {/* {checkValidate && !item.author ? (
                <div className="error">Vui lòng nhập tác giả bài viết!</div>
              ) : null} */}
            </div>
          </div>
          <div className="button-footer-panel">
            <Button
              onClick={onClose}
              style={{ marginRight: 8 }}
              className="btn btn-delete"
            >
              Hủy
            </Button>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              {id ? "Lưu thay đổi" : "Tạo mới"}
            </Button>
          </div>
        </Form>
      </Panel>
    </AdminPage>
  );
}
export default connect(
  (state) => {
    const {
      menu: {
        menuBar = [],
        nameMenu = []
      },
      allNews: {
        itemActive,
      },
    } = state;
    return {
      menuBar,
      nameMenu,
      itemActive
    };
  },
  ({
    allNews: { createOrEdit, updateViewForNews },
  }) => {
    return {
      createOrEdit,
      updateViewForNews
    };
  }
)(CreteOrEditNew);
