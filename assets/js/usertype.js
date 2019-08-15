(function() {
    window.dataLayer = window.dataLayer || [];

    var t = window.setTimeout(function () {
        initGTM();
    }, 1000);

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            window.dataLayer = window.dataLayer || [];
            window.dataLayer[0].userType = response.userType;

            initGTM();
            clearTimeout(t);
        }
    };
    xhr.open('GET', '/service/usertype', true);
    xhr.send(null);
})();
