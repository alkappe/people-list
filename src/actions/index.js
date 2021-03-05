//an object
export const createSearchAction = e => {
    return { type: 'SEARCH', payload: e.target.value }
}
