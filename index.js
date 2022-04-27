
const superbowlWin = (records) =>{
    const result = records.find((record)=>{
        if (record.result === "W"){
            return record
        }else{
            return undefined
        }
    })
    if (result){
        return result.year
    }
}