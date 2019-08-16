(function() {
    window.dataLayer = window.dataLayer || [];

    var xhr = new XMLHttpRequest();
    xhr.timeout = 1000;
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                window.dataLayer = window.dataLayer || [];
                window.dataLayer[0].userType = response.userType;
            }
            initGTM();
        }
    };
    xhr.ontimeout = function () {
        initGTM();
    };
    xhr.open('GET', '/service/usertype', true);
    xhr.send(null);
})();
