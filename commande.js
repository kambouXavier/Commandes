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