document.addEventListener('DOMContentLoaded', function() {
    // Function to extract the software ID from the query string
    function getSoftwareIdFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('id');
    }

    // Fetch software details using the ID
    const softwareId = getSoftwareIdFromUrl();
    if (softwareId) {
        fetch(`/getSoftware?id=${softwareId}`)
            .then(response => response.json())
            .then(data => {
                // Update the DOM with the fetched software details
                document.querySelector('#title').textContent = data.name;
                document.querySelector('#price').textContent = `$${data.price}`;
                document.querySelector('#desc').textContent = data.description;

                document.querySelector('#imglogo').src = "./images/logo/" + data.imageLink;
                document.querySelector('#imgPrv1').src = "./images/preview/" + (data.imgLinkPr1 || "gray.JPG");
                document.querySelector('#imgPrv2').src = "./images/preview/" + (data.imgLinkPr2 || "gray.JPG");
                //console.log(data.imgLinkPr2);

                // Add event listener to the "Buy now" button
                const buyButton = document.querySelector('.btn-outline-secondary');
                const bod = JSON.stringify({ productId: softwareId });
                console.log(bod);
                buyButton.addEventListener('click', function () {
                    // Make the POST request with the product ID
                    fetch('/genSerial', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: bod
                    })
                        .then(response => response.json())
                        .then(data => {
                            // Handle the response data as needed
                            console.log(data);
                            // Optionally, redirect to a success page or show a confirmation message
                        })
                        .catch(error => {
                            console.error('Error making POST request:', error);
                        });
                });
            })
            .catch(error => {console.error('Error fetching software details:', error); window.location.href = "/browse";});
    }
});