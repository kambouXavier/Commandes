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