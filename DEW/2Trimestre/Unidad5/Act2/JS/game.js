let score=0;
let firstPick = null;
let secondPick = null;

window.addEventListener("load", function() {
    puntuacion(0);
    setter();
});

function puntuacion(score) {
    document.getElementById("score").innerHTML = "Puntuacion: "+score;
}

function setter() {
    const images = ["https://i.pinimg.com/originals/51/56/25/5156259e1f30dece1376dc5695a9a1d4.png", 
                    "https://static.vecteezy.com/system/resources/previews/001/198/363/non_2x/diamond-poker-card-png.png", 
                    "https://i.pinimg.com/originals/45/a0/89/45a089218c85a2587f5a056b9c226ea1.png", 
                    "https://www.kindpng.com/picc/m/8-86459_cartas-de-poker-as-de-pica-png-download.png", 
                    "https://i.pinimg.com/originals/35/fd/31/35fd31636faeafb4fe35ed3ced374f9e.png", 
                    "https://static.vecteezy.com/system/resources/previews/001/198/363/non_2x/diamond-poker-card-png.png"];
    
    let pool = [...images, ...images];
    pool.sort(() => Math.random() - 0.5);

    let index = 0;
    for (let j = 0; j <= 3; j++) {
        for (let i = 0; i <= 4; i++) {
            const cell = document.getElementById(`row${i}-${j}`);
            if (cell) {
                cell.dataset.images = pool[index];
                cell.style.backgroundColor = "gray";
                cell.addEventListener("click", revealColor);
                index++;
            }
        }
    }
}

function revealColor(event) {
    const cell = event.target;

    if (cell.classList.contains("matched") || cell === firstPick) return;

    cell.style.backgroundImage = `url(${cell.dataset.images}`;
    cell.style.backgroundSize = "cover";
    cell.style.backgroundPosition = "center";

    if (!firstPick) {
        firstPick = cell;
    } else if (!secondPick) {
        secondPick = cell;

        if (firstPick.dataset.images === secondPick.dataset.images) {
            firstPick.classList.add("matched");
            secondPick.classList.add("matched");
            score++;
            puntuacion(score);

            firstPick = null;
            secondPick = null;
        } else {
            setTimeout(() => {
                firstPick.style.backgroundColor = "gray";
                secondPick.style.backgroundColor = "gray";
                firstPick = null;
                secondPick = null;
            }, 500);
        }
    }
}