document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const jsonObject = {};
    
    formData.forEach(function(value, key){
        jsonObject[key] = value;
    });

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function() {
        if (xhr.status === 201) {
            alert("Registration successful!"); 
            window.location.href = "register.html"; 
        }
    };
    xhr.send(JSON.stringify(jsonObject));
});
