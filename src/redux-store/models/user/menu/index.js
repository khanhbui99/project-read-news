import typeOfNewsProvider from "data-access/type-of-news-provider";
import { Modal } from "antd";
import snackbar from "utils/snackbar-utils";
const { confirm } = Modal;
export default {
  state: {
    menuBar: [],
    activeMenu: {},
    nameMenu: [],
    indexAvtive: '1',
  },

  reducers: {
    updateData(state, payload = {}) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    getMenuBar: async () => {
      let res = await typeOfNewsProvider.getTypeOfNews();

      let { data = [], success = false } = res || {};

      if (success) {
        const arr = data.map(item => item.name)
        let arrMenu = [{
          id: 0,
          name: "Trang chủ",
          slug: "",
        }]

        dispatch.menu.updateData({
          menuBar: arrMenu.concat(data),
        });
        dispatch.menu.updateData({
          nameMenu: ([""]).concat(arr),
        });
      }
    },
    changeActiveMenu: async (payload,) => {
      const { index = 1, active = {} } = payload

      dispatch.menu.updateData({
        indexAvtive: index + '',
        activeMenu: { ...active }
      });
    },


  }),
};
