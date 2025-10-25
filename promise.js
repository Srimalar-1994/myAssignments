function fetchDataFromDatabase()
{
    let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const data = true
                if(data)
                {
                    resolve("Data fetched successfully")
                }
                else{               
                    reject ("Data not found")
                }
            }, 3000)       
    })
    return promise
}
fetchDataFromDatabase().then(result => {console.log(result)}).catch(error => {console.log(error)})
