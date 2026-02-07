fetch("/api/appointments")
.then(res=>res.json())
.then(data=>{

    const table=document.getElementById("tableData");

    data.forEach(a=>{
        table.innerHTML += `
        <tr>
            <td>${a.id}</td>
            <td>${a.name}</td>
            <td>${a.email}</td>
            <td>${a.appointment_date}</td>
        </tr>
        `;
    });

});
