const search = (state = '', action) => {
    /* console.log(action) */
    //modalita switch dato uno stato iniziale e l'azione iniziale
    switch(action.type) {
        case 'SEARCH':
            // invatti vedi che va dentro alle actions
            return action.payload

        default:
            return state;
    }
}

export default search;