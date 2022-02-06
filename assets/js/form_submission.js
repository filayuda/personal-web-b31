function showData() { 
    let name = document.getElementById("tname").value ; 
    let email = document.getElementById("temail").value ; 
    let number = document.getElementById("tnumber").value ; 
    let subject = document.getElementById("tsubject").value ; 
    let message = document.getElementById("tmessage").value ; 

//    let dataObject = { 
//         name ,
//         email,
//         number,
//         subject,
//         message,
//         setData : function(set) { 
//             this.name = set ; 
//             this.email = set ; 
//             this.number = set ; 
//             this.subject = set ; 
//             this.message = set ; 
//         }
//    };

    let form = document.forms["formInput"]["temail"].value;
	let att=form.indexOf("@");
	let dots=form.lastIndexOf(".");

    const check = !isNaN(number) ; 
    if(confirm("A want save this data ? ")) { 
        if(check == !NaN) { 
            if(name === "re you sure" || email === "" || number === "" || subject === "" || message === "") { 
                alert("masih ada yg kosong ni ") ; 
            }if(att<1 || dots<1 || dots+2>=form.length) { 
                alert("Alamat email tidak valid.");
                return false;
            }else { 
                let emailReceiver = "filayudafirmansya@outlook.com" ; 
        
                let a = document.createElement("a") ; 
                a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name is ${name}, this is my phone ${number}` ; 
                a.click() ; 
                console.log("success");
                console.table(dataObject) ;
                // alert("Alamat email valid.");
            }
        }else { 
            alert("Phone bukan number") ; 
        }
    }else { 
       resetForm() ; 
    }
    
}

function resetForm() { 
    document.getElementById("tname").value = "" ; 
    document.getElementById("temail").value = "" ; 
    document.getElementById("tnumber").value = "" ; 
    document.getElementById("tsubject").value = "" ; 
    document.getElementById("tmessage").value = "" ; 
}
