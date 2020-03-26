import axios from 'axios'
const BaseURL = 'http://localhost:4000/'

export const getData = async (endPoint) => {
   const response = await axios.get(`${BaseURL}${endPoint}`).then(
     res => {
       return res.data
     })
      return response;
}

export const postData = async (endPoint, data) => {
  const response = await axios.post(`${BaseURL}${endPoint}`, {...data}).then(() => true)
  .catch(()=> false)
  return response
}

export const deleteData = async (endPoint, id) => {
  const response = await axios.delete( `${BaseURL}${endPoint}/${id}`)
  .then(res => {
    debugger
    console.log(res);
    console.log(res.data);
  }).catch(()=> {})
  return response
}