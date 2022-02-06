let blogs = [] ; 

function addBlog(event) { 
    event.preventDefault() ; //untuk penghentian reload yg berhubungan dengan onsubmit


    let inputTitle = document.getElementById("input-blog-title").value ; 
    // let inputContent = document.getElementById("input-blog-content").value ; 
    let inputDateStart = document.getElementById("input-blog-dateStart").value ; 
    let inputDateEnd = document.getElementById("input-blog-dateEnd").value ; 
    let inputDescription = document.getElementById("input-blog-description").value ; 
    let inputSkill = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(item => item.value) ; 
  
    let img = document.getElementById("input-blog-image") ;
    img = URL.createObjectURL(img.files[0]) ; 

    let blog = { 
        // authors : "firmansya filayuda", 
        inputTitle, 
        // inputContent,
        inputDateStart,
        inputDateEnd,
        inputDescription,
        inputSkill,
        img, 
        postedAt : new Date()
    }

    //VALIDASI CHECKBOX
    // if(inputSkill == false) { 
    //     alert("Tolong diisi gaesss") ; 
            // break;
    // }

    blogs.push(blog) ; //untuk kirim data di akhir, jadi ceritanya gini, tolong dong kirim data isi nya itu object blog ke array blogs
    
    
    renderBlog() ; 
}

function renderBlog() { 
        // console.table(blogs) ; 
        // console.table(blogs[0].inputTitle) ; 
        let lengthData = blogs.length ;
        let blogProjects = document.getElementById("projects") ; 
        // let tampil = document.getElementById("tampil") ;

              

        
        blogProjects.innerHTML = firstContent() ; 
        // durationBlogs() ; 
        for (let i = 0; i < lengthData; i++) {
            blogProjects.innerHTML += `
            <div class="list-project">
                
                <div class="header">
                    <a id="myLink" title="Click to do something" href="blog-detail.html" onclick="linkValue();"><img src="${blogs[i].img}" alt=""  width="100%"></a>
                    <p> <b>${blogs[i].inputTitle}</b></p>
                    <small>Duration :  ${durationMonth(blogs[i].inputDateStart, blogs[i].inputDateEnd)} Month</small>
                </div>
                <div class="content">
                    <p>${blogs[i].inputDescription}</p>
                    <p class="content-awesome">
                        <i class="${blogs[i].inputSkill[0]}"></i>
                        <i class="${blogs[i].inputSkill[1]}"></i>
                        <i class="${blogs[i].inputSkill[2]}"></i>
                        <i class="${blogs[i].inputSkill[3]}"></i>
                    </p>
                </div>
                <div class="footer">
                    <div class="edit">
                    <a href="#">edit</a>
                    </div>
                    <div class="delete">
                    <a href="#">delete</a>
                    </div>
                </div>
                
            </div>`
            // }
        } ; 
}
function firstContent() { 
    return `
    <div class="list-project">
          <div class="header">
            <img src="assets/img/a.jpg" alt=""  width="100%">
            <p> <b> Dumbways Mobile App - 2022</b></p>
            <small>Duration : 3 Month</small>
          </div>
          <div class="content">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint et quibusdam nihil,orem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint et quibusdam nihil,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint et quibusdam nihil,orem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint et quibusdam nihil,</p>
            <p class="content-awesome">
              <i class="fab fa-google-play"></i>
              <i class="fab fa-android"></i>
              <i class="fab fa-java"></i>
            </p>
          </div>
          <div class="footer">
            <div class="edit">
              <a href="#">edit</a>
            </div>
            <div class="delete">
              <a href="#">delete</a>
            </div>
          </div>
          
        </div>`
}


function getFullTime(time) { 
    let date = time.getDate()
  let monthIndex = time.getMonth()
  let year = time.getFullYear()

  let hours = time.getHours()
  let minutes = time.getMinutes()
  
  if(minutes < 10){
    minutes = '0' + minutes 
  }
  
  return `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`
}

function getDistanceTime(time){
    // waktu saat ini - waktu postingan
    const distance = new Date() - new Date(time)
  
    // convert to day
    const miliseconds = 1000
    const secondsInMinute = 60
    const minutesInHour = 60
    const secondsInHour = secondsInMinute * minutesInHour
    const hoursInDay = 23
    const month = 30
     
    // let monthDistance = distance / (miliseconds * secondsInHour * hoursInDay * weekInMonth * montInYear)
    // if (monthDistance >= 12){
    //   return Math.floor(monthDistance) + 'month ago'
    // } else {
    //   let weekDistance = Math.floor(distance / (hoursInDay * weekInMonth))
    //   if (weekDistance > 4 )
    //   return weekDistance + 'week ago'
    // } if (dayDistance >= 1){
    //   return Math.floor(dayDistance) + 'day ago'
    //   // menghitung 1 day ago
    // } else {
    //   // convert to hour
    //   let hourDistance = Math.floor(distance / (miliseconds * secondsInHour))
    //   if (hourDistance > 0 ) {
    //     return hourDistance + 'hour ago'
    //   } else {
    //     // convert to minute
    //     const minuteDistance = Math.floor(distance / (miliseconds * secondsInMinute))
    //     return minuteDistance + 'minute ago'
    //   }
    // }
    let monthDistance = distance /( miliseconds * secondsInHour * hoursInDay / month)
   
     let dayDistance = distance / (miliseconds * secondsInHour * hoursInDay)
     dayDistance = 60
     if (dayDistance < 30){
       if (dayDistance >= 1){
         return Math.floor(dayDistance) + ' day ago'
        // menghitung 1 day ago
      } else {
          // convert to hour
          let hourDistance = Math.floor(distance / (miliseconds * secondsInHour))
          if (hourDistance > 0 ) {
              return hourDistance + ' hour ago'
            } else {
                // convert to minute
                const minuteDistance = Math.floor(distance / (miliseconds * secondsInMinute))
                return minuteDistance + ' minute ago'
              }
            }
      } else {
        return Math.floor(dayDistance / month) + ' month ago'
      } 
      
            
    console.log(monthDistance);
}
// setInterval(function(){ 
//     renderBlog() ; 
// }, 3000) ; 


function linkValue() {
    document.getElementById("blog-detail").innerHTML = "hello gaes" ; 

}
function testVale() { 
}

function durationBlogs() { 
    // event.preventDefault() ; //untuk penghentian reload yg berhubungan dengan onsubmit 
    
  
    const start_date = new Date(blogs.inputDateStart) ; 
    const end_date = new Date(blogs.inputDateEnd) ; 
  
    const total_months = (end_date.getFullYear() - start_date.getFullYear())*12 + (end_date.getMonth() - start_date.getMonth()) 
    // console.log(blogs.) ; 
    // document.getElementById("durationTest").innerHTML=total_months ; 
  
  }

 
    var dateStart = new Date('2014-04-03');
    var dateEnd = new Date('2014-08-03');
    document.getElementById("startDate").innerHTML = dateStart.toDateString() ; 
    document.getElementById("endDate").innerHTML = dateEnd.toDateString() ; 
    
    const total_months = (dateEnd.getFullYear() - dateStart.getFullYear())*12 + (dateEnd.getMonth() - dateStart.getMonth()) 

    document.getElementById("tampil").innerHTML = total_months ; 

  function durationMonth(start, end) { 
    const startDate = new Date(start) ;
    const endDate = new Date(end) ;

    // GET DAY
      // let time = Math.abs(startDate - endDate);
      // let duration = Math.floor(time / (1000 * 60 * 60 * 24))

      // if (duration > 30) {
      //     return `1 Month ${duration - 30} Day`
      // } else {
      //     return `${duration} Day`
      // }

    const total_months = (endDate.getFullYear() - startDate.getFullYear())*12 + (endDate.getMonth() - startDate.getMonth()) ;

    return total_months ; 

  }

  function getDistanceMonth() {
  let startdate = document.getElementById('start-date').value ; 
  let enddate = document.getElementById('end-date').value ;

  let date1 = new Date(startdate)
  let date2 = new Date(enddate)

  let time = Math.abs(date1 - date2);
  let duration = Math.floor(time / (1000 * 60 * 60 * 24))

  if (duration > 30) {
      return `1 Month ${duration - 30} Day`
  } else {
      return `${duration} Day`
  }
}