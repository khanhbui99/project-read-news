import nvduAnProvider from "data-access/nv-du-an-provider";
import { Modal } from "antd";
import snackbar from "utils/snackbar-utils";
const { confirm } = Modal;
export default {
  state: {
    activeMenu: '1',
  },

  reducers: {
    updateData(state, payload = {}) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    changeActiveMenu: async (payload) => {
      dispatch.menu.updateData({
        activeMenu: payload + '',
      });
    },

  }),
};
