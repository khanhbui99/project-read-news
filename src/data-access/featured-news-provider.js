import constants from "resources/strings";
import client from "utils/client-utils";
export default {
    getFeaturedNews() {
        let url = constants.api.featured_news;
        return client.requestApi("get", url, {});
    },
    getNewPost() {
        let url = constants.api.new_post;
        return client.requestApi("get", url, {});
    }
};
