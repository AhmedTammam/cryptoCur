export const FILTER = 'FILTER'

export function filteraction(term) {
    return {
        type: FILTER,
        payload: term
    }
}