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

// <!-- function monthDiff(dateFrom, dateTo) {
//     return dateTo.getMonth() - dateFrom.getMonth() + 
//       (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
//    }
   
   
//    //examples
//    console.log(monthDiff(new Date(2000, 01), new Date(2000, 02))) // 1
//    console.log(monthDiff(new Date(1999, 02), new Date(2000, 02))) // 12 full year
//    console.log(monthDiff(new Date(2009, 11), new Date(2010, 0))) // 1
// -->


// Difference in Months between two dates in JavaScript:
start_date = new Date(year, month, day); //Create start date object by passing appropiate argument end_date = new Date(new Date(year, month, day) 
total months between start_date and end_date :
total_months = (end_date.getFullYear() - start_date.getFullYear())*12 + (end_date.getMonth() - start_date.getMonth())