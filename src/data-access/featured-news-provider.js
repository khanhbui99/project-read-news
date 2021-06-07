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
    },
    getCovid19() {
        let url = constants.api.covid_19;
        return client.requestApi("get", url, {});
    }
};
