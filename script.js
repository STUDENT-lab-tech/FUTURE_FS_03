// Show form
function bookConsult(){
    document.getElementById("booking").style.display="block";
    document.getElementById("booking")
        .scrollIntoView({behavior:"smooth"});
}


// Send data to backend
document.addEventListener("DOMContentLoaded", function(){

document.getElementById("appointmentForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const data = {
        name: this[0].value,
        email: this[1].value,
        date: this[2].value
    };

    await fetch("/api/book",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });

    document.getElementById("msg").style.display="block";
    this.reset();

});

});
