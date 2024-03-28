

var addressMembers="https://localhost:7129/api/Members";
var addressManufacturer="https://localhost:7129/api/Manufacturer";
var addressVaccination="https://localhost:7129/api/Vaccination";


// when the program on load
function start(){
  //insert the data into the inputs
  //members
    axios.get(addressMembers).then((res)=>{
        var memberslst=res.data; 
         var selectMembers=document.getElementById("selectMembers");
          var selectMemberAddVac=document.getElementById("selectMemberAddVac");
          var selectUpdateMembers=document.getElementById("selectUpdateMembers");
          var selectDeleteMembers=document.getElementById("selectDeleteMembers");

        memberslst.forEach(member => {
           o1=document.createElement("option");
           o2=document.createElement("option");
           o3=document.createElement("option");
           o4=document.createElement("option");
           o1.text=member.name+" "+member.lastName;
           o1.value=member.codeMem;
           o2.value=member.codeMem;
           o2.text=member.id+" "+member.name+" "+member.lastName;
           o3.text=member.name+" "+member.lastName;
           o3.value=member.codeMem;
           o4.text=member.name+" "+member.lastName;
           o4.value=member.codeMem;
           selectMembers.appendChild(o1);
           selectMemberAddVac.appendChild(o2);
           selectUpdateMembers.appendChild(o3);
           selectDeleteMembers.appendChild(o4);
        });

    }) 
    //manufavturer
    axios.get(addressManufacturer).then((res)=>{
      var Manufacturerlst=res.data;
      var selectManufacurer=document.getElementById("selectManufacurer");
      Manufacturerlst.forEach(manufacturer=>{
         o5=document.createElement("option");
         o5.value=manufacturer.codeMan;
         o5.text=manufacturer.name;
         selectManufacurer.appendChild(o5);
      })
    })
}

//הצהגת פרטי חבר
function showDetails(){
//get the inputs from the body
  var details=document.getElementById("fromDetails");
  details.innerHTML=' ';
  var s=document.getElementById("selectMembers");
  var name=document.createElement("p");
  var lastName=document.createElement("p");
  var id=document.createElement("p");
  var dob=document.createElement("p");
  var address=document.createElement("p");
  var phone=document.createElement("p");
  var mobilePhone=document.createElement("p");
  var ill=document.createElement("p");
  var recovery=document.createElement("p");
  var countVac=document.createElement("p");
  var code=s[s.selectedIndex].value;

  //the index of the selected member
  index=s.selectedIndex
  //insert the details into the body
  axios.get(addressMembers).then((res) => {
    name.innerText=res.data[index].name;
    lastName.innerText=(res.data[index].lastName);
    id.innerText=res.data[index].id;
    let result =(res.data[index].dob).slice(0,10);
    dob.innerText=result;
    address.innerText=res.data[index].address;
    phone.innerText=res.data[index].phone;
    mobilePhone.innerText=res.data[index].mobilePhone;
    //ill.innerText=res.data[index].ill;
    if(res.data[index].ill!=null){
      let result1 =(res.data[index].ill).slice(0,10);
      ill.innerText=result1;
    }
    if(res.data[index].recovery!=null){
      let result2 =(res.data[index].recovery).slice(0,10);
    recovery.innerText=result2;
    }
   
  //  recovery.innerText=res.data[index].recovery;
    countVac.innerText=res.data[index].countVac;
  })
  //insert the vaccinations
  axios.get(addressVaccination).then((res)=>{
    var lstVac=res.data;
    lstVac.forEach(vaccination=>{
      if(vaccination.codeMem==code){
         vac=document.createElement("p");
         if(vaccination.codeMan==1)
            {
              var  man="Moderna"
            }
          else 
             {
              var  man="Faizer"
            }
            let result =(vaccination.dateOfVaccination).slice(0,10);
          vac.innerText=result+" "+man;
          details.appendChild(vac);
      }
    })
  })

    details.appendChild(name);
    details.appendChild(lastName);
    details.appendChild(id);
    details.appendChild(dob);
    details.appendChild(address);
    details.appendChild(phone);
    details.appendChild(mobilePhone);
    details.appendChild(ill);
    details.appendChild(recovery);
    details.appendChild(countVac);

}

//add a member
function addMember(){
    var name=document.getElementById("nameAdd").value;
    var lastName=document.getElementById("lastNameAdd").value;
    var id=document.getElementById("idAdd").value;
    var dob=document.getElementById("DobAdd").value;
    var address=document.getElementById("addressAdd").value;
    var phone=document.getElementById("phoneAdd").value;
    var mobilePhone=document.getElementById("mobilePhoneAdd").value;

    axios.post(addressMembers,{
      "Name":name,
      "LastName":lastName,
      "Id":id,
      "Address":address,
      "Dob":dob,
      "Phone":phone,
      "MobilePhone":mobilePhone,
    }).then((res) => 
    {
      console.log(res.data);
      location.reload();
    })
}
//fill the input to update the member
function fill(){
  var s=document.getElementById("selectUpdateMembers");
  var name=document.getElementById("nameUpdate");
  var lastName=document.getElementById("lastNameUpdate");
  var id=document.getElementById("idUpdate");
  var dob=document.getElementById("DobUpdate");
  var address=document.getElementById("addressUpdate");
  var phone=document.getElementById("phoneUpdate");
  var mobilePhone=document.getElementById("mobilePhoneUpdate");
  var ill=document.getElementById("illUpdate");
  var recovery=document.getElementById("recoveryUpdate");

//
  index=s.selectedIndex
  axios.get(addressMembers).then((res) => {
    name.value=res.data[index].name;
    lastName.value=(res.data[index].lastName);
    id.value=res.data[index].id;
    let result =(res.data[index].dob).slice(0,10);
    dob.value=result;
    address.value=res.data[index].address;
    phone.value=res.data[index].phone;
    mobilePhone.value=res.data[index].mobilePhone;
    if(res.data[index].ill!=null){
      let result1 =(res.data[index].ill).slice(0,10);
      ill.value=result1;
    }
    else{
      ill.value="1900-01-01";

    }

    if(res.data[index].recovery!=null){
      let result2 =(res.data[index].recovery).slice(0,10);
      recovery.value=result2;
    }
    else
    {
      recovery.value="1900-01-01";

    }
   // recovery.value=res.data[index].recovery;
  })
}
//update member
function updateMember(){
  var s=document.getElementById("selectUpdateMembers");
  var name=document.getElementById("nameUpdate").value;
  var lastName=document.getElementById("lastNameUpdate").value;
  var id=document.getElementById("idUpdate").value;
  var dob=document.getElementById("DobUpdate").value;
  var address=document.getElementById("addressUpdate").value;
  var phone=document.getElementById("phoneUpdate").value;
  var mobilePhone=document.getElementById("mobilePhoneUpdate").value;
  var ill=document.getElementById("illUpdate").value;
  var recovery=document.getElementById("recoveryUpdate").value;
  code=s[s.selectedIndex].value;
  axios.put(`${addressMembers}/${code}`,{
    "Name":name,
      "LastName":lastName,
      "Id":id,
      "Address":address,
      "Dob":dob,
      "Phone":phone,
      "MobilePhone":mobilePhone,
      "Ill":ill,
      "Recovery":recovery, 
  }).then((res)=>{
    console.log(res.data);
    location.reload();
  })
}

//delete member
function DeleteMember(){
  var s=document.getElementById("selectDeleteMembers");
  code=s[s.selectedIndex].value
  axios.delete(`${addressMembers}/${code}`).then((res) => 
    {
      console.log(res.data);
      location.reload();
    })
    }


//add vaccination to a member
function addVaccination(){
  var date=document.getElementById("dateAdd").value;
  var manufacturer=document.getElementById("selectManufacurer");
  var member=document.getElementById("selectMemberAddVac");
  var manufacturerCode=manufacturer[manufacturer.selectedIndex].value;
  var memberCode=member[member.selectedIndex].value;
  var date=document.getElementById("dateAdd").value;
  
  axios.post(addressVaccination,{
      "dateOfVaccination": date,
      "manufacturer": null,
      "codeMan": manufacturerCode,
      "members": null,
      "codeMem": memberCode  
  }).then((res)=>{
    console.log(res.data);
  })

  axios.get(`${addressMembers}/${memberCode}`).then((res)=>{
    member=res.data;
    if(member.countVac==4)
    {
      alert("there is alardy 4 vaccination")
    }
  })
}

//show how many members are not Vaccinated 
function notVaccinated(){
  var count=0;
  axios.get(addressMembers).then((res)=>{
    var memberslst=res.data;
    memberslst.forEach(member => {
          if(member.countVac==0){
            count++;
          }
    });
    alert("the number of members that stell not vaccinated "+count);
}) 
}



//show the graf- how many members was ill in every day of the last month
function numOfIllEeveryday(){


  const patients = [];

   axios.get(addressMembers).then((res)=>{
    var memberslst=res.data; 
    memberslst.forEach(member => {
      if(member.ill!=null){
         ill=(member.ill).slice(0,10);
      }
      if(member.recovery!=null){
       recovery=(member.recovery).slice(0,10);
        patients.push({illDate:ill,recoveryDate:recovery});
          alert(ill);
     }
         
    });
      console.log(patients);
}) 

const startDate = new Date(); // Current date
startDate.setMonth(startDate.getMonth() - 1); // Set the date to the previous month

const endDate = new Date(); // Current date

const patientCountByDay = {};
const dates = [];

// Iterate through each day in the date range
for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
  let count = 0;
  dates.push(date);
  if(date.getMonth()<10&&date.getDay()<10){
    sortDate=date.getFullYear()+"-0"+date.getMonth()+"-0"+date.getDay();
  }
  
 // alert(date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay()+" 5")

  // Check each patient to see if they were present on this day
  patients.forEach(patient => {
    if (sortDate >= patient.illDate && sortDate <= patient.recoveryDate) {
          count++;
    }
  });

  // Store the count for the current day
  const formattedDate = date.toISOString().slice(0, 10); // Format date as YYYY-MM-DD
  patientCountByDay[formattedDate] = count;
}

const ctx = document.getElementById('patientChart').getContext('2d');

const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: dates,
    datasets: [{
      label: 'Patient Count',
      data: patientCountByDay,
      borderColor: 'blue',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
console.log(patientCountByDay);

}