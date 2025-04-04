export const fetchShort=async(url)=>{
    try {
        const response=await fetch(`https://localhost:8080/short?url=${url}`);
        response.json()
            .then(data=>{
                console.log(data);
            })
    } catch (error) {
        console.log(error.message);
    }
}