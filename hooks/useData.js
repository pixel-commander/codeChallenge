import { useState, useEffect } from "react"

async function getData(dataUrlPath, setData) {
  const res = await fetch(dataUrlPath);
  const json = await res.json();
  setData(json.data);
};

async function deleteItem(dataUrlPath, setData, data, itemId) {
  let itemUrlPath = `${dataUrlPath}/${itemId}`
  await fetch(itemUrlPath, { method: 'DELETE' })
    .then(({ status }) => {
      // return status code 'ok'
      if (status === 204) {
        let d = data.reduce((acc, item) => acc = item.id !== itemId ? [...acc, item] : acc, [])
        return setData(d)
      } else {
        return setData({ error: 'there was an error' })
      }
    })
    .catch(err => console.log({ err }))
}

const handle = (type, itemId, dataUrlPath, setData, data) => {
  switch (type) {
    case 'get': return getData(dataUrlPath, setData)
    case 'delete': return deleteItem(dataUrlPath, setData, data, itemId)
    default: throw Error('invalide handler type for useData')
  }
}

export const useData = (dataUrlPath, hasOptions, del) => {

  dataUrlPath = dataUrlPath || 'https://reqres.in/api/users' // will accept new url

  const loadDataUrlPath = del ? `${dataUrlPath}?delay=${del}` : dataUrlPath // adds delay for demo use with api

  const [data, setData] = useState({ loading: true }) // loading until set to error or return data.

  useEffect(() => data.loading ? getData(loadDataUrlPath, setData) : () => ({}), [data, loadDataUrlPath]) // checks for data once, then sets error or return data

  // if the table has options (such as edit, delete, etc...) then provide data, handle array, otherwise return data
  return !hasOptions ? data : [data, (type, itemId) => handle(type, itemId, dataUrlPath, setData, data)]
}