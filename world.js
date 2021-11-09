var countryButton;
var cityButton;
var result;
var httpRequest= new XMLHttpRequest();

window.onload = function() {
    countryButton = document.getElementById("lookup");
    cityButton = document.getElementById("lookupCity");
    result = document.getElementById("result");

    countryButton.addEventListener("click", function(element){
        element.preventDefault();
        let url = "world.php"+"?country="+ document.getElementById("country").value+ "&context=country";
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


    cityButton.addEventListener("click", function(element){
        element.preventDefault();
        let url = "world.php"+"?country="+ document.getElementById("country").value+ "&context=city";
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
