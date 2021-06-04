import featuredNewsProvider from "data-access/featured-news-provider";
import { Modal } from "antd";
import snackbar from "utils/snackbar-utils";
const { confirm } = Modal;
export default {
  state: {
    highlights: [],
    seeMore: [],
    allNew: [],
    newPost: []
  },

  reducers: {
    updateData(state, payload = {}) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    getMenuBar: async () => {
      let res = await featuredNewsProvider.getFeaturedNews();

      let { data = {}, success = false } = res || {};

      if (success) {

        dispatch.allNews.updateData({
          highlights: [...(data.noibat || [])],
          seeMore: [...(data.xemnhieu || [])],
          allNew: [...(data.all || [])],
        });
      }
    },
    getNewPost: async () => {
      let res = await featuredNewsProvider.getNewPost();

      let { data = [], success = false } = res || {};

      if (success) {

        dispatch.allNews.updateData({
          newPost: data || [],
        });
      }
    },

  }),
};