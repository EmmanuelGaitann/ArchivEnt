// --------------------------------------------------------
// 1. LISTE DES PHOTOS (à compléter selon ton dossier réel)
// --------------------------------------------------------

const photosJour1 = [
    "jour1/photo0.jpg",
    "jour1/photo1.jpg",
    "jour1/photo2.jpg",
    "jour1/photo3.jpg",
    "jour1/photo4.jpg",
    "jour1/photo5.jpg",
    "jour1/photo6.jpg",
    "jour1/photo7.jpg",
    "jour1/photo8.jpg",
    "jour1/photo9.jpg",
    "jour1/photo10.jpg",
    "jour1/photo11.jpg",
    "jour1/photo12.jpg",
    "jour1/photo13.jpg",
    "jour1/photo14.jpg",
    "jour1/photo15.jpg",
    "jour1/photo16.jpg",
    "jour1/photo17.jpg",
    "jour1/photo19.jpg",
    "jour1/photo20.jpg",
    "jour1/photo21.jpg",
    "jour1/photo22.jpg",
    "jour1/photo23.jpg",
    "jour1/photo24.jpg",
    "jour1/photo25.jpg",
    "jour1/photo26.jpg",
    "jour1/photo27.jpg",
    "jour1/photo28.jpg",
    "jour1/photo29.jpg",
    "jour1/photo30.jpg",
    "jour1/photo31.jpg",
    "jour1/photo32.jpg",
    "jour1/photo33.jpg",
    "jour1/photo34.jpg",
    "jour1/photo35.jpg",
    "jour1/photo36.jpg",
    "jour1/photo37.jpg",
    "jour1/photo38.jpg",
    "jour1/photo39.jpg",
    "jour1/photo40.jpg",
    "jour1/photo41.jpg",
    "jour1/photo42.jpg",
    "jour1/photo43.jpg",
    "jour1/photo44.jpg",
    "jour1/photo45.jpg",
    "jour1/photo46.jpg",
    "jour1/photo47.jpg",
    "jour1/photo48.jpg",
    "jour1/photo49.jpg",
    "jour1/photo50.jpg",
    "jour1/photo51.jpg",
    "jour1/photo52.jpg",
    "jour1/photo53.jpg",
    "jour1/photo54.jpg",
    "jour1/photo55.jpg",
    "jour1/photo56.jpg",
    "jour1/photo57.jpg",
    "jour1/photo58.jpg",
    "jour1/photo59.jpg",
    "jour1/photo60.jpg",
    "jour1/photo61.jpg",
    "jour1/photo62.jpg",
    "jour1/photo63.jpg",
    "jour1/photo64.jpg",
    "jour1/photo65.jpg",
    "jour1/photo66.jpg",
    "jour1/photo67.jpg",
    "jour1/photo68.jpg",
    "jour1/photo69.jpg",
    "jour1/photo70.jpg",
    "jour1/photo71.jpg",
    "jour1/photo72.jpg",
    "jour1/photo73.jpg",
    "jour1/photo79.jpg",
    "jour1/photo80.jpg",
    "jour1/photo81.jpg",
    "jour1/photo82.jpg",
    "jour1/photo84.jpg",
    "jour1/photo85.jpg",
    "jour1/photo86.jpg",
    "jour1/photo87.jpg",
];


const photosJour2 = ["Bientot disponible",
];

let allPhotos = [
    ...photosJour1.map(src => ({ src, day: "jour1" })),
    ...photosJour2.map(src => ({ src, day: "jour2" })),
];


// --------------------------------------------------------
// 2. AFFICHE LES PHOTOS
// --------------------------------------------------------

function displayPhotos(list) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    list.forEach(photo => {
        const col = document.createElement("div");
        col.className = "col-6 col-md-4 col-lg-3 gallery-item";

        col.innerHTML = `
            <a href="${photo.src}" class="glightbox" data-gallery="cosumaf">
                <img src="${photo.src}" class="img-fluid shadow-sm">
            </a>
        `;

        gallery.appendChild(col);
    });

    GLightbox({ selector: ".glightbox" });
}

displayPhotos(allPhotos);


// --------------------------------------------------------
// 3. FILTRE
// --------------------------------------------------------

function filterPhotos(filter) {
    document.querySelectorAll(".btn-group .btn")
        .forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");

    if (filter === "all") return displayPhotos(allPhotos);

    displayPhotos(allPhotos.filter(p => p.day === filter));
}
