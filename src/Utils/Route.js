export default function Route(url, queries) {
    const queryString = Object.entries(queries)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
    return `${url}?${queryString}`
}