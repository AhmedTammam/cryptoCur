export const FILTER = 'FILTER'

export function filteraction(state) {
    return {
        type: FILTER,
        payload: state
    }
}