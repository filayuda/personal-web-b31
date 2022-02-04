let blogs = [] ; 

function addBlog(event) { 
    event.preventDefault() ; //untuk penghentian reload yg berhubungan dengan onsubmit


    let inputTitle = document.getElementById("input-blog-title").value ; 
    let inputContent = document.getElementById("input-blog-content").value ; 
    let inputSkill = document.getElementById("input-blog-skill") ; 
    // checkSkill = document.forms[0] ;
    

    let img = document.getElementById("input-blog-image") ;
    img = URL.createObjectURL(img.files[0]) ; 

    let blog = { 
        authors : "firmansya filayuda", 
        inputTitle, 
        inputContent,
        inputSkill,
        img, 
        postedAt : new Date()
    }; 

    blogs.push(blog) ; //untuk kirim data di akhir, jadi ceritanya gini, tolong dong kirim data isi nya itu object blog ke array blogs
    
    
    renderBlog() ; 
}

function renderBlog() { 
        // console.table(blogs) ; 
        // console.table(blogs[0].inputTitle) ; 
        
        let lengthData = blogs.length ;
        console.log(lengthData);
        
        let blogContent = document.getElementById("contents") ; 

        blogContent.innerHTML = firstContent() ; 
        
    
        //Looping data blogs
        for (let i = 0; i < lengthData; i++) {
            // let element 
            // for(let i = 0 ; i < element.length ; i++) { 
            //     if(element.checked){
            //         let a =  element.value + ',' ; 
            //         console.log(a);
            //     }
            // }
            
            let element = blogs[i];
            console.log(element);

            // if(i+1 == lengthData) { 
                blogContent.innerHTML += `
                <div class="blog-list-item">
                    <div class="blog-image">
                    <img src="${blogs[i].img}" alt="" />
                    </div>
                    <div class="blog-content">
                    <div class="btn-group">
                        <button class="btn-edit">Edit Post</button>
                        <button class="btn-post">Post Blog</button>
                    </div>
                    <h1>
                        <a href="blog-detail.html" target="_blank" class="tittle-content">
                        ${blogs[i].inputTitle}
                        </a>
                    </h1>
                    <div class="detail-blog-content">
                        ${blogs[i].postedAt} | ${blogs[i].authors}
                    </div>
                    <p>
                        ${blogs[i].inputContent}
                    </p>
                    </div>
                </div>
                
                `
            // }
        } ; 
}
function firstContent() { 
    return `
    <div class="blog-list-item">
        <div class="blog-image">
        <img src="assets/blog-img.png" alt="" />
        </div>
        <div class="blog-content">
        <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
        </div>
        <h1>
            <a href="blog-detail.html" target="_blank" class="tittle-content"
            >Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a
            >
        </h1>
        <div class="detail-blog-content">
            12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
        </div>
        <p>
            Ketimpangan sumber daya manusia (SDM) di sektor digital masih
            menjadi isu yang belum terpecahkan. Berdasarkan penelitian
            ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
            meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Quam, molestiae
            numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
            eligendi debitis?
        </p>
        </div>
    </div>
    `
}

// function addBlog(event) {
//     event.preventDefault() ; //untuk penghentian reload yg berhubungan dengan onsubmit

//     // let date = document.getElementById("input-blog-dateStart").value ; 
//     // let checkBox = document.getElementById("skill").value ; 
//     // console.log(checkBox);

//     // let img = document.getElementById("skill") ;
//     //     img = URL.createObjectURL(img.files[0]) ; 
//     //     console.log(img);

    //mengambil gambar di checkbox dari value
    // let skill = document.getElementById("skill").value ; 
    // let lokasi = 'assets/' +skill ; 
    
    // document.getElementById("tampilImg").src = lokasi ; 

//     // let checkSkill = document.getElementById("skill"); 
//     // checkSkill = document.forms[0] ;
//     // let skillOk = "" ; 
//     // for (let i = 0; i < checkSkill.length; i++) {
//     //     if(checkSkill[i].checked){ 
//     //         skillOk = skillOk + checkSkill[i].value + "," ; 
//     //     }
//     // }
//     // document.getElementById("tampil").innerHTML = skillOk ;

// }