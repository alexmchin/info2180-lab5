var countryButton;
var result;
var httpRequest= new XMLHttpRequest();

window.onload = function() {
    countryButton = document.getElementById("lookup");
    result = document.getElementById("result");

    countryButton.addEventListener("click", function(element){
        element.preventDefault();
        let url = "world.php"+"?country="+ document.getElementById("country").value;
        httpRequest.onreadystatechange=check;
        httpRequest.open('GET',url);
        httpRequest.send();

        function check(){
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    var response = httpRequest.responseText;
                    result.innerHTML=response;
                } else {
                alert('There was a problem with the request.');
                }
            }
        }
    });
}
