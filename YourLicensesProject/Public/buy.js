document.addEventListener('DOMContentLoaded', function() {
    function getSoftwareIdFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('id');
    }

    const softwareId = getSoftwareIdFromUrl();
    if (softwareId) {
        fetch(`/getSoftware?id=${softwareId}`)
            .then(response => response.json())
            .then(data => {
                document.querySelector('#title').textContent = data.name;
                document.querySelector('#price').textContent = `$${data.price}`;
                document.querySelector('#desc').textContent = data.description;

                document.querySelector('#imglogo').src = "./images/logo/" + (data.imageLink || "software-logo-409721744.PNG");
                document.querySelector('#imgPrv1').src = "./images/preview/" + (data.imgLinkPr1 || "gray.JPG");
                document.querySelector('#imgPrv2').src = "./images/preview/" + (data.imgLinkPr2 || "gray.JPG");


                const buyButton = document.querySelector('.btn-outline-secondary');
                const bod = JSON.stringify({ productId: softwareId, accountId: 1 });
                console.log(bod);
                buyButton.addEventListener('click', function () {
                    fetch('/genSerial', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: bod
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            if(data.msg == "Not logged in")
                                window.location.href = "/login";

                            else
                                window.location.href = "/mainclient";
                        })
                        .catch(error => {
                            console.error('Error making POST request:', error);
                        });
                });
            })
            .catch(error => {console.error('Error fetching software details:', error); window.location.href = "/browse";});
    }

});