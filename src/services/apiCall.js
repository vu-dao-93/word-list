import 'whatwg-fetch'

const URL = 'http://localhost:8000'
const apiCall = {
    getWordList: (length, start) => {
        let url = `${URL}/api/words?length=${length}`
        url += start? `&start=${start}`: ''
        return fetch(url).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response
            } else {
                var error = new Error(response.statusText)
                error.response = response
                throw error
            }
        }).then((res) => res.json()).catch(err => {
            console.log(err);
            return err
        })
    }
}

export default apiCall
