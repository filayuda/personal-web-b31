function showData() { 
    let name = document.getElementById("txt_name").value ; 
    let email = document.getElementById("txt_email").value ; 
    let number = document.getElementById("txt_number").value ; 
    let gender = document.getElementById("gender").value ; 
    let message = document.getElementById("message").value ; 

    const dataObject = { 
        Dname : name, 
        Demail : email, 
        Dnumber : number,
        Dgender : gender, 
        Dmessage : message
    }
    if(name === "" || email === "" || number === "" || gender === "" || message === "") { 
        alert("masih ada yg kosong ni ") ; 
    }else { 
        let emailReceiver = "filayudafirmansya@outlook.com" ; 

        let a = document.createElement("a") ; 
        a.href = `mailto:${emailReceiver}?gender=${gender}&body=Hello my name is ${name}` ; 
        a.click() ; 
        console.log("success");
    }

}