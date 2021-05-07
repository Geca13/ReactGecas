import axios from 'axios'

const API_URL = 'http://localhost:8081/api/categories'

class CategoryService {

    getCategories() {
        return axios.get(API_URL);
    }

}
export default new CategoryService();