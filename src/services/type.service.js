import axios from 'axios';

class TypeService {
    constructor(){
        this.resource = axios.create({
            baseURL: 'http://170.239.85.65:4000/'
        })
    }

    list() {
        return this.resource.get('type')
    }
}

export default new TypeService();