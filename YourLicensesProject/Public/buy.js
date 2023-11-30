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

                // Update other elements as needed
            })
            .catch(error => {console.error('Error fetching software details:', error); window.location.href = "/browse";});
    }
});