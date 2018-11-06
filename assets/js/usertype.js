(function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            window.dataLayer = window.dataLayer || [];
            window.dataLayer[0].userType = response.userType;
        }
    };
    xhr.open('GET', 'https://www.gov.scot/service/usertype', true);
    xhr.send(null);
})();
