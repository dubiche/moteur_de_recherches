// Exemple de données de pages (tu pourras les remplacer par ton propre contenu plus tard)
const pages = [
    {
        title: "Page 1",
        content: "Voici le contenu de la première page de mon projet Genially."
    },
    {
        title: "Page 2",
        content: "Ce texte se trouve sur la deuxième page. Recherche quelque chose ici."
    },
    {
        title: "Page 3",
        content: "Voici le contenu d'une autre page où tu peux rechercher."
    }
];

// Fonction de recherche
function search() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const resultsContainer = document.getElementById("search-results");

    // Efface les résultats précédents
    resultsContainer.innerHTML = "";

    // Si la barre de recherche est vide, ne rien afficher
    if (searchTerm === "") {
        return;
    }

    // Filtrer les pages qui contiennent le terme recherché
    const results = pages.filter(page => {
        return page.content.toLowerCase().includes(searchTerm);
    });

    // Afficher les résultats
    if (results.length > 0) {
        results.forEach(page => {
            const resultItem = document.createElement("div");
            resultItem.classList.add("result-item");
            resultItem.innerHTML = `<strong>${page.title}</strong><p>${page.content}</p>`;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = "Aucun résultat trouvé.";
    }
}
