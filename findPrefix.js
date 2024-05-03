function findPrefix(arr){
    let n = 4 ;
    let prefix = ["ca"]
    let output = [""]

    for (let i =0 ; i< n ; 
        i++){
        if (prefix == arr[i]){
          output  += arr[i]

        }
       
    }
   
    console.log([output])
     
}



findPrefix ( ["car", "ca" ,'fear', 'center'])

