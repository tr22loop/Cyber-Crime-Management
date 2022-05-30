//const name = document.getElementById('name');
//const address = document.getElementById('id');
//const status = document.getElementById('status');


const U_Id = document.getElementById('U_Id');
const U_Password = document.getElementById('U_Password');
const U_Name = document.getElementById('U_Name');
const U_address = document.getElementById('U_address');
const U_email = document.getElementById('U_email');
const U_Phone = document.getElementById('U_Phone');
const U_Gender = document.getElementById('U_Gender');

const UserInsert = async () => {
    let response = await axios({
        url: 'http://localhost:5500/insert',
        method: 'post',
        data: {
            'U_Id': U_Id.value,
            'U_Password': U_Password.value,
            'U_Name': U_Name.value,
            'U_address': U_address.value,
            'U_email': U_email.value,
            'U_Phone': U_Phone.value,
            'U_Gender': U_Gender.value,
        }
    });

    status.innerText = response.data;
     let url = "/Loginform.html";
     window.location.href = url;
}

const login = async () => {
    let response = await axios(
        {
            url: 'http://localhost:5500/login',
            method: 'post',
            data:
            {
                'U_Id': U_Id.value,
                'U_Password': U_Password.value,
            }
        });

    if (response.data == "Wrong Username or password!!") {
        document.getElementById('viewer').innerHTML = response.data;
    }
    else {
        let url = "/Login.html?name=" + U_Id.value;
        window.location.href = url;
    }
}


const A_Id = document.getElementById('A_Id');
const A_Password = document.getElementById('A_Password');

const Alogin = async () => {
    let response = await axios(
        {
            url: 'http://localhost:5500/Alogin',
            method: 'post',
            data:
            {
                'A_Id': A_Id.value,
                'A_Password': A_Password.value,
            }
        });

    if (response.data == "Wrong Username or password!!") {
        document.getElementById('viewer').innerHTML = response.data;
    }
    else {
        let url = "/Admininfo.html?name=" + A_Id.value;
        window.location.href = url;
    }
}



const arektaUserInsert = async () => {
    let response = await axios({
        url: 'http://localhost:5500/get',
        method: 'get',
    });

    for (let i = 0; i < response.data.length; i++) {
        const element = response.data[i];
        status.innerText = status.innerText + element.name + " " + element.id + "\n";
    }
};

const gotomyinfopage = async () => {
    console.log("myinfo is clicked");
    console.log(window.location.search);
    var queryString = window.location.search;
    var queries = queryString.split("=");
    console.log(queries);
    var username = queries[1];
    console.log(username);
    let url = "/myinfo.html?name=" + username;
    window.location.href = url;
}


const yourfunction = async () => {
    console.log("myinfo2 is clicked");
    console.log(window.location.search);
    var queryString = window.location.search;
    var queries = queryString.split("=");
    console.log(queries);
    var username = queries[1];
    console.log(username);
    let response = await axios(
        {
            url: 'http://localhost:5500/GetAdminDetails',
            method: 'post',
            data:
            {
                'username': username,
            }
        });
    console.log(response.data);
    console.log(response.data[0]);
    var adminData = response.data[0];
   // document.getElementById('viewer').innerHTML = JSON.stringify(adminData);
    document.getElementById('name').innerHTML = "Name: " + adminData["A_Name"];
    document.getElementById('address').innerHTML = "Address: " + adminData["A_address"];
    document.getElementById('email').innerHTML = "Email: " + adminData["A_email"];
    document.getElementById('phone').innerHTML = "Phone: " + adminData["A_Phone"];
    document.getElementById('gender').innerHTML = "Gender: " + adminData["A_Gender"];
    document.getElementById('specialization').innerHTML = "Specialization: " + adminData["A_specialization"];
}



const userinfopage = async () => {
    console.log("myinfo is clicked");
    console.log(window.location.search);
    var queryString = window.location.search;
    var queries = queryString.split("=");
    console.log(queries);
    var username1 = queries[1];
    console.log(username1);
    let url = "/usermyinfo.html?name=" + username1;
    window.location.href = url;
}





const userfunction = async () => {
    console.log("myinfo2 is clicked");
    console.log(window.location.search);
    var queryString = window.location.search;
    var queries = queryString.split("=");
    console.log(queries);
    var username1 = queries[1];
    console.log(username1);
    let response = await axios(
        {
            url: 'http://localhost:5500/GetUserDetails',
            method: 'post',
            data:
            {
                'username1': username1,
            }
        });
    console.log(response.data);
    console.log(response.data[0]);
    var adminData = response.data[0];
    // document.getElementById('viewer').innerHTML = JSON.stringify(adminData);
    // document.getElementById('Id').innerHTML = "Id: " + adminData[" U_Id"];
    document.getElementById('name').innerHTML = "Name: " + adminData["U_Name"];
    document.getElementById('address').innerHTML = "Address: " + adminData["U_address"];
    document.getElementById('email').innerHTML = "Email: " + adminData["U_email"];
    document.getElementById('phone').innerHTML = "Phone: " + adminData["U_Phone"];
    document.getElementById('gender').innerHTML = "Gender: " + adminData["U_Gender"];
}

const C_Id = document.getElementById('C_Id');
const C_category = document.getElementById('C_category');
const C_Issue = document.getElementById('C_Issue');
const C_Details = document.getElementById('C_Details');
const C_Time = document.getElementById('C_Time');
const C_Suspect = document.getElementById('C_Suspect');
const C_area = document.getElementById('C_area');
//const C_status = document.getElementById('C_status');

const compinsert = async () => {
    let response = await axios({
        url: 'http://localhost:5500/compinsert',
        method: 'post',
        data: {
            'C_Id': C_Id.value,
            'C_category': C_category.value,
            'C_Issue': C_Issue.value,
            'C_Details': C_Details.value,
            'C_Time': C_Time.value,
            'C_Suspect': C_Suspect.value,
            'C_area': C_area.value,
            //'C_status': C_status.value,
        }
    });

    status.innerText = response.data;
    let url = "/Loginform.html";
    window.location.href = url;
}




//arektaUserInsert();