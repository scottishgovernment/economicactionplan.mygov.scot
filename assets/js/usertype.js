(function() {

    window.dataLayer = window.dataLayer || [{}];

    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/service/usertype', true);

    xhr.timeout = 1000;

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                window.dataLayer[0].userType = response.userType;
            }
            initGTM();
        }
    };

    xhr.ontimeout = initGTM;

    xhr.send(null);
})();
