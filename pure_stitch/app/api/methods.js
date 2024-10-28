import Cookies from "js-cookie";

const token = Cookies.get('accessToken')

async function Get(url,cache){
  
    const URL = process.env.API_URL+url
    const data =  await fetch(URL,{
        cache:cache?cache:'force-cache',
        // headers:{
        //     Authorization:`Bearer ${token}`
        // },
    },
)
    return data.json()
}

const Post = async (api,body) => {
  const URL = process.env.API_URL+api
    try {
      const response = await fetch(URL, {
        method: 'POST',
        cache:'no-store',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( body ),
      })

      const data = await response.json();
      return data
    } catch (error) {
      console.error('Error sending POST request:', error.message);
    }
  };


const Delete = async (api,body) => {
  const URL = process.env.API_URL+api
    try {
      const response = await fetch(URL, {
        method: 'DELETE',
        cache:'no-store',
        body: JSON.stringify( body ),
      })

      const data = await response.json();
      return data
    } catch (error) {
      console.error('Error sending DELETE request:', error.message);
    }
  };

  export {Get, Post, Delete} 