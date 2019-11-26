import actions from './actions'

const fetchItems = async () => {
    const reponse = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'GET'
    })
    const json = await reponse.json()
    return json
}

export const getAllLists = () =>
    async (dispatch) => {
        const items = await fetchItems()
        
        items.forEach((item, index) => {
            if (index < 10) {
                dispatch(actions.add(item))
            }
        });
    }