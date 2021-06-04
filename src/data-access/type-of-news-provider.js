import constants from "resources/strings";
import client from "utils/client-utils";
export default {
  getTypeOfNews() {
    let url = constants.api.typeOfNews;
    return client.requestApi("get", url, {});
  }
};
