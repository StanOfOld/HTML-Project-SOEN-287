document.addEventListener('DOMContentLoaded', function() {

    let searchQuery;
    let selectedGenre;

    const dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownItems.forEach(item => {
      item.addEventListener('click', function () {
        const selectedGenre = item.value;
        document.getElementById('genreDropdownButton').textContent = selectedGenre;
        document.getElementById('genreDropdown').setAttribute('data-selected-genre', selectedGenre);
      });
    });

    const queryParams = new URLSearchParams(window.location.search);

    const genreParam = queryParams.get('genre');
    if (genreParam) {
        document.getElementById('genreDropdownButton').textContent = genreParam;
        document.getElementById('genreDropdown').setAttribute('data-selected-genre', genreParam);
    }

    const searchParam = queryParams.get('search');
    if (searchParam) {
        document.getElementById('searchInput').value = searchParam;
    }
    

    for (const p of queryParams) {
      console.log(p);
    }

    console.log(queryParams.page);

    fetch("/getSoftwareList?" + queryParams.toString())
      .then(response => response.json())
      .then(responseData => {
        const tableBody = document.querySelector('.table tbody');

        const itemsPerPage = 10;
        const startIndex = ((queryParams.get('page') || 1) - 1) * itemsPerPage;

        const data = responseData.softwareList;

        data.forEach((item, index) => {
          const row = document.createElement('tr');
          row.className = 'roww';

          const cells = [
            document.createElement('th'),
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td')
          ];

          cells[0].textContent = startIndex + index + 1;
          cells[1].textContent = item.name;
          cells[2].textContent = item.genre;
          cells[3].textContent = item.description;
          cells[4].textContent = `$${item.price}`;
          cells[5].textContent = item.numDownloads;
          cells[6].innerHTML = `<a href="/buy?id=${item.softwareID}" class="btn btn-outline-secondary">Check out</a>`;

          cells.forEach(cell => row.appendChild(cell));
          tableBody.appendChild(row);
        });

        generatePagination(responseData.totalPages);
      })
      .catch(error => console.error('Error fetching data:', error));

    fetch('/getTopSoftware')
    .then(response => response.json())
    .then(data => {
    const carouselInner = document.querySelector('.carousel-inner');

    data.forEach((item, index) => {
        if (index % 3 === 0) {
        const carouselItem = document.createElement('div');
        carouselItem.className = index === 0 ? 'carousel-item active' : 'carousel-item';

        const row = document.createElement('div');
        row.className = 'row row-cols-1 row-cols-md-3 g-4';

        carouselItem.appendChild(row);
        carouselInner.appendChild(carouselItem);
        }

        const col = document.createElement('div');
        col.className = 'col';
        let imglink = item.imageLink == null ? "software-logo-409721744.PNG" : item.imageLink;
        col.innerHTML = `
        <div class="card">
            <img src="./images/logo/${imglink}" class="card-img-top" alt="${item.name}" style="width:200px;height:200px; display: block; margin-left: auto; margin-right: auto;">
            <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <p class="card-text">$${item.price}</p>
            <a href="/buy?id=${item.softwareID}" class="btn btn-outline-secondary stretched-link">Check out</a>
            </div>
        </div>
        `;

        const currentCarouselItem = carouselInner.lastChild;
        currentCarouselItem.lastChild.appendChild(col);
    });
    })
    .catch(error => console.error('Error fetching data:', error));

  });

  function handleFormSubmit(event) {
    console.log("triessss");
    event.preventDefault();

    searchQuery = document.getElementById('searchInput').value;
    selectedGenre = document.getElementById('genreDropdown').getAttribute('data-selected-genre');

    const newURL = `/browse?page=1&search=${searchQuery}&genre=${selectedGenre}`;

    window.location.href = newURL;
  }

  function generatePagination(totalPages) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    console.log(totalPages);

    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement('li');
      li.className = 'page-item';
      li.innerHTML = `<a class="page-link" href="#" onclick="loadSoftwarePage(${i})">${i}</a>`;
      pagination.appendChild(li);
    }
  }

  function loadSoftwarePage(pageNumber) {

    searchQuery = document.getElementById('searchInput').value;
    selectedGenre = document.getElementById('genreDropdown').getAttribute('data-selected-genre');
    var newURL;
    newURL = `/browse?page=${pageNumber}&search=${searchQuery}&genre=${selectedGenre}`;

    window.location.href = newURL;
  }