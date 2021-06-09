import featuredNewsProvider from "data-access/featured-news-provider";
import { Modal } from "antd";
import snackbar from "utils/snackbar-utils";
const { confirm } = Modal;
export default {
  state: {
    highlights: [],
    seeMore: [],
    allNew: [],
    newPost: [],
    covid19: [],
    itemActive: {},
    dataKindOfNews: [],
    searchData: []
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
    getCovid19: async () => {
      let res = await featuredNewsProvider.getCovid19();

      let { data = [], success = false } = res || {};

      if (success) {

        dispatch.allNews.updateData({
          covid19: data || [],
        });
      }
    },
    updateViewForNews: async (id = undefined) => {
      let res = await featuredNewsProvider.getViewForNews(id);

      let { data = {}, success = false } = res || {};

      if (success) {

        dispatch.allNews.updateData({
          itemActive: { ...data },
        });
      }
    },
    getKindOfNewsFollowType: async (id) => {
      dispatch.menu.changeActiveMenu({
        index: id + '',
      });
      let res = await featuredNewsProvider.getKindOfNewsFollowType(id);

      let { data = [], success = false } = res || {};

      if (success) {

        dispatch.allNews.updateData({
          dataKindOfNews: data || [],
        });
      }

    },
    searchDataFollowTitle: async (key) => {
      let res = await featuredNewsProvider.searchDataFollowTitle(key);

      let { data = [], success = false } = res || {};

      if (success) {

        dispatch.allNews.updateData({
          searchData: data || [],
        });
      }
    }


  }),
};
