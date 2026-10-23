const nomClient = "Awa";
const nomProduit = "Ordinateur";
const prixUnitaire = 250000;
const quantite = 2;
const fraisLivraison = 5000;
const tauxTVA = 18;

const montantProduits = prixUnitaire * quantite;
const montantTVA = montantProduits * tauxTVA / 100;
const montantTTC = montantProduits + montantTVA;
const totalAPayer = montantTTC + fraisLivraison;
const prixMoyenTTC = montantTTC / quantite;

console.log("===== REÇU DE COMMANDE =====");
console.log("Client :", nomClient);
console.log("Produit :", nomProduit);
console.log("Prix unitaire :", prixUnitaire, "FCFA");
console.log("Quantité :", quantite);
console.log("");
console.log("Montant des produits :", montantProduits, "FCFA");
console.log("TVA (" + tauxTVA + "%) :", montantTVA, "FCFA");
console.log("Montant TTC :", montantTTC, "FCFA");
console.log("Livraison :", fraisLivraison, "FCFA");
console.log("TOTAL À PAYER :", totalAPayer, "FCFA");
console.log("");

console.log("Prix moyen TTC par produit :", prixMoyenTTC, "FCFA");
console.log("Type du nom :", typeof nomClient);
console.log("Type du produit :", typeof nomProduit);
console.log("Type du prix :", typeof prixUnitaire);
console.log("Type de la quantité :", typeof quantite);
console.log("Type des frais de livraison :", typeof fraisLivraison);
console.log("Type du taux de TVA :", typeof tauxTVA);
console.log("Type du montant des produits :", typeof montantProduits);
console.log("Type du montant de la TVA :", typeof montantTVA);
console.log("Type du montant TTC :", typeof montantTTC);
console.log("Type du total à payer :", typeof totalAPayer);
console.log("Type du prix moyen TTC :", typeof prixMoyenTTC);