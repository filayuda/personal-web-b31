function getFullTime(time) { 
    const date = time.getDate() ; 
    const monthIndex = time.getMonth() ; 
    const years = time.getFullYear() ; 
    
    const hour = time.getHours() ; 
    const minutes = time.getMinutes() ; 
    const monthFull = month[monthIndex] ; 
    
    return `${date} ${monthFull} ${years} ${hour}:${minutes} | WIB` ; 
}

function getDistanceTime(time) { 
    const distance = new Date() - new Date(time) ; 

    //convert to day
    const milisecond = 1000 ; 
    const secondInMinutes = 60 ; 
    const minuteInHour = 60 ; 
    const secondInHour = secondInMinutes * minuteInHour ; 
    const hourInDay = 23 ; 

    let dayDistance = distance / (milisecond * secondInHour * hourInDay) ; 

    if(dayDistance >= 1) { 
        const time = Math.floor(dayDistance) + ' a day ago' ; 
        console.log("time " + time); 
        return time ; 
    }else { 
        //Conver to hour
        let hourDistance = Math.floor(distance / (milisecond * secondInHour)) ; 

        if(hourDistance > 0 ) { 
            return hourDistance + ' hour ago' ; 
        }else {
            //convert to minute
            const minuteDistance = Math.floor(distance / (milisecond * secondInMinutes)) ; 
            return minuteDistance + ' minute ago' ; 
        } 
    }
}
// setInterval(function(){ 
//     renderBlog() ; 
// }, 3000) ; 
