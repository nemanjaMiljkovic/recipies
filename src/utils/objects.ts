/**
 *
 * Pick properties from object if key is included in property name
 */

export function filterKeysFromObject(
    key: string,
    object: Record<string, string>
) {
    return Object.entries(object).reduce((obj, entry) => {
        if (entry[0].includes(key) && typeof entry[1] === 'string') {
            obj[entry[0]] = entry[1]
        }
        return obj
    }, {})
}
