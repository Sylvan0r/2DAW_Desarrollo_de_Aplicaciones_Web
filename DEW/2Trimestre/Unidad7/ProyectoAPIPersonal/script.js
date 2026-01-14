getInfoChars();

function showInfoChars(data) {
    const container = document.getElementById("contents");
    container.innerHTML = "";

    const cardNodes = data.items.map(item => {
        const charInfo = document.createElement("div");
        charInfo.className = "card m-2";
        charInfo.style.width = "18rem";
        charInfo.style.margin = "1rem";
        charInfo.style.display = "inline-block";

        charInfo.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="card-img-top p-3" style="height: 300px; object-fit: contain;">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="text-muted">${item.race}</p>

                <div class="d-flex gap-2">
                    <button class="btn btn-sm btn-primary" data-bs-toggle="collapse" data-bs-target="#collapse${item.id}">
                        Detalles
                    </button>
                </div>

                <div class="collapse mt-3" id="collapse${item.id}">
                    <div class="card card-body bg-light small">
                        <p><strong>Ki:</strong> ${item.ki}</p>
                        <p><strong>MaxKi:</strong> ${item.maxKi}</p>
                        <p><strong>Afiliación:</strong> ${item.affiliation}</p>
                        <p>${item.description || 'Sin descripción'}</p>
                    </div>
                </div>
            </div>
        `;
        return charInfo;
    });

    cardNodes.forEach(card => container.appendChild(card));
}


function getInfoChars(){
    fetch('https://dragonball-api.com/api/characters')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            showInfoChars(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}