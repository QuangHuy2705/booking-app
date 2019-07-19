import axios from 'axios'

const token = localStorage.getItem('JWT')

class HTTPRequest {
    constructor() {
        this.headers = {
            'content-type': 'application/json'
        }

        this.url = ''
    }

    to = url => {
        this.url = url
        return this
    }

    get = async () => {
        const response = await axios({
            method: 'GET',
            url: this.url,
            headers: this.headers
        })
        return response
    }

    post = async (body) => {
        const response = await axios({
            method: 'POST',
            url: this.url,
            headers: this.headers,
            data: body
        })
        return response
    }

    put = async body => {
        const response = await axios({
            method: 'PUT',
            url: this.url,
            headers: this.headers,
            data: body
        })
        return response
    }

    delete = async () => {
        const reponse = await axios({
            method: 'DELETE',
            url: this.url,
            headers: this.headers
        })
    }
}
export default new HTTPRequest()