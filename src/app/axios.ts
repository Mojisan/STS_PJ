import axios from "axios"

let apiUrl = "https://jsonplaceholder.typicode.com/posts/"

interface IUploadPost {
  title: string
  body: string
}

export async function getPostById(id: number) {
  try {
    const response = await axios.get(apiUrl + id)
    console.log(response.data)
    return response.data
  } catch (error) {
    return null
  }
}

export async function getPost() {
  try {
    const response = await axios.get(apiUrl)
    console.log(response.data)
  } catch (error) {
    return null
  }
}

export const uploadPost = async (post: IUploadPost) => {
  try {
    await axios.post(apiUrl, post)
    console.log("Success")
  } catch (error) {
    console.log(error)
  }
}
