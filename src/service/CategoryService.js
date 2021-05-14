import axios from 'axios'

const API_URL = 'http://localhost:8081/api/subCategories'

class CategoryService {

    getSubCategoriesByCategoryId(id) {
        return axios.get(API_URL + '/' + id);
    }

}
export default new CategoryService();