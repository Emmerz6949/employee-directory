import axios from "axios";

const queryURL = "https://randomuser.me/api/?results=10&nat=us";

export default {
    getE: function() {
        return axios.get(queryURL);
    }
}
