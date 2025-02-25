import {  apiV2} from "@/services/http";
export default {
    'set': async (model) => {
        let result = {};
        await apiV2.get(`/config-columns/${model}`)
        .then(rs => {
            result = rs.data;
        }).catch(er => {
            console.error(er);
        });
        return result;
    },

}
