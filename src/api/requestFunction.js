export default async function requestFunction (url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => { throw new Error(error) })
}
