export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    // token: 'BQBsGIGxBUQ1j7d0NSs3b9zpffqZZIQo4WhDZ_-wJlbuDnWpWbhKkXEJ0G4pfBtzsbuYCCa-0m6-mYymremUYArKZjhR9xxdFl5TBPMHfLwKIVE-bi17gNceXlhpBGPME56N95ethG8MJ57hAMW2cKJNOZx5tLewHr0j9axOIf9myQDP'
}

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer