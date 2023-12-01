document.addEventListener('DOMContentLoaded', function () {
    // ... Other code ...

    function populateCarousel() {
        fetch('/getSoftwareByOwner')
            .then(response => response.json())
            .then(data => {
                const carouselInner = document.querySelector('.carousel-inner');

                data.forEach((item, index) => {
                    const carouselItem = document.createElement('div');
                    carouselItem.className = index === 0 ? 'carousel-item active' : 'carousel-item';

                    const col = document.createElement('div');
                    col.className = 'col';
                    col.innerHTML = `
                        <div class="card" style="width: 18rem;">
                            <img src="./images/logo/${item.imageLink || 'default-image-link.png'}" class="card-img-top" alt="${item.name}">
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="card-text">${item.description}</p>
                                <a href="#" class="btn btn-secondary">Client Database</a>
                                <a href="#" class="btn btn-secondary">Generate Serial Numbers</a>
                            </div>
                        </div>
                    `;

                    carouselItem.appendChild(col);
                    carouselInner.appendChild(carouselItem);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    populateCarousel();

    

    
});
