/*************
*  Variables *
*************/

const affichage_sujet = document.getElementById('sujet');
const affichage_verbe = document.getElementById('verbe');
const input_bases1 = document.getElementById('input_bases1');
const input_bases2 = document.getElementById('input_bases2');

var mots_places = [];
var mots_places1 = [];
var mots_places2 = [];

var mots_a_placer1 = [];
var mots_a_placer2 = [];

var base1 = [];
var base2 = [];

function effacerMotsPlacer () {
	mots_placer = [];
	mots_placer1 = [];
	mots_placer2 = [];
	}

function effacerMotsAPlacer () {
	mots_a_placer1 = [];
	mots_a_placer2 = [];
	}

function effacerBases () {
	base1 = [];
	base2 = [];
	}
	
function effacerInputBases () {
	input_bases1.innerHTML = "";
	input_bases2.innerHTML = "";
	}

var pronoms = ["je", "tu", "il", "elle", "nous", "vous", "ils", "elles"];
var pronomsElide = ["j'", "tu", "il", "elle", "nous", "vous", "ils", "elles"];
var imparfaitEtre = ["étais", "étais", "était", "était", "étions", "étiez", "étaient", "étaient"];
var imparfaitAvoir = ["avais", "avais", "avait", "avait", "avions", "aviez", "avaient", "avaient"];
var imparfaitPremierGroupe = ["chantais", "chantais", "chantait", "chantait", "chantions", "chantiez", "chantaient", "chantaient"];
var imparfaitPremierGroupeVerbesDifferents = ["chantais", "parlais", "regardait", "jouait", "donnions", "laviez", "tombaient", "aidaient"];
var imparfaitVenir = ["venais", "venais", "venait", "venait", "venions", "veniez", "venaient", "venaient"];
var imparfaitPrendre = ["prenais", "prenais", "prenait", "prenait", "prenions", "preniez", "prenaient", "prenaient"];
var imparfaitVouloir = ["voulais", "voulais", "voulait", "voulait", "voulions", "vouliez", "voulaient", "voulaient"];
var imparfaitPouvoir = ["pouvais", "pouvais", "pouvait", "pouvait", "pouvions", "pouviez", "pouvaient", "pouvaient"];
var imparfaitFaire = ["faisais", "faisais", "faisait", "faisait", "faisions", "faisiez", "faisaient", "faisaient"];
var imparfaitAller = ["allais", "allais", "allait", "allait", "allions", "alliez", "allaient", "allaient"];
var imparfaitDire = ["disais", "disais", "disait", "disait", "disions", "disiez", "disaient", "disaient"];
var imparfaitVoir = ["voyais", "voyais", "voyait", "voyait", "voyions", "voyiez", "voyaient", "voyaient"];
var passeComposeEtre = ["ai été", "as été", "a été", "a été", "avons été", "avez été", "ont été", "ont été"];
var passeComposeAvoir = ["ai eu", "as eu", "a eu", "a eu", "avons eu", "avez eu", "ont eu", "ont eu"];
var passeComposePremierGroupe = ["ai chanté", "as chanté", "a chanté", "a chanté", "avons chanté", "avez chanté", "ont chanté", "ont chanté"];
var passeComposePremierGroupeVerbesDifferents = ["ai chanté", "as parlé", "a regardé", "a joué", "avons donné", "avez lavé", "sont tombés", "ont aidé"];
var passeComposeVenir = ["suis venu(e)", "es venu(e)", "est venu", "est venue", "sommes venu(e)s", "êtes venu(e)s", "sont venus", "sont venues"];
var passeComposePrendre = ["ai pris", "as pris", "a pris", "a pris", "avons pris", "avez pris", "ont pris", "ont pris"];
var passeComposeVouloir = ["ai voulu", "as voulu", "a voulu", "a voulu", "avons voulu", "avez voulu", "ont voulu", "ont voulu"];
var passeComposePouvoir = ["ai pu", "as pu", "a pu", "a pu", "avons  pu", "avez pu", "ont pu", "ont pu"];
var passeComposefaire = ["ai fait", "as fait", "as fait", "a fait", "avons fait", "avez fait", "ont fait", "ont fait"];
var passeComposeAller = ["suis allé(e)", "es allé(e)", "est allé", "est allée", "sommes allé(e)s", "êtes allé(e)s", "sont allés", "sont allées"];
var passeComposeDire = ["ai dis", "as dis", "a dit", "a dit", "avons dit", "avez dit", "ont dit", "ont dit"];
var passeComposeVoir = ["ai vu", "as vu", "a vu", "a vu", "avons vu", "avez vu", "ont vu", "ont vu"];
var presentEtre = ["suis", "es", "est", "est", "sommes", "êtes", "sont", "sont"];
var presentAvoir = ["ai", "as", "a", "a", "avons", "avez", "ont", "ont"];
var presentPremierGroupe = ["chante", "chantes", "chante", "chante", "chantons", "chantez", "chantent", "chantent"];
var presentPremierGroupeVerbesDifferents = ["chante", "parles", "regarde", "joue", "donnons", "lavez", "tombent", "aident"];
var presentVenir = ["viens", "viens", "vient", "vient", "venons", "venez", "viennent", "viennent"];
var presentPrendre = ["prends", "prends", "prend", "prend", "prenons", "prenez", "prennent", "prennent"];
var presentVouloir = ["veux", "veux", "veut", "veut", "voulons", "voulez", "veulent", "veulent"];
var presentfaire = ["fais", "fais", "fait", "fait", "faisons", "faites", "font", "font"];
var presentAller = ["vais", "vas", "va", "va", "allons", "allez", "vont", "vont"];
var presentDire = ["dis", "dis", "dit", "dit", "disons", "dites", "disent", "disent"];
var presentPouvoir = ["peux", "peux", "peut", "peut", "pouvons", "pouvez", "peuvent", "peuvent"];
var presentVoir = ["vois", "vois", "voit", "voit", "voyons", "voyez", "voient", "voient"];
var futurEtre = ["serai", "seras", "sera", "sera", "serons", "serez", "seront", "seront"];
var futurAvoir = ["aurai", "auras", "aura", "aura", "aurons", "aurez", "auront", "auront"];
var futurPremierGroupe = ["chanterai", "chanteras", "chantera", "chantera", "chanterons", "chanterez", "chanteront", "chanteront"];
var futurPremierGroupeVerbesDifferents = ["chanterai", "parleras", "regardera", "jouera", "donnerons", "laverez", "tomberont", "aideront"];
var futurVenir = ["viendrai", "viendras", "viendra", "viendra", "viendrons", "viendrez", "viendront", "viendront"];
var futurPrendre = ["prendrai", "prendras", "prendra", "prendra", "prendrons", "prendrez", "prendront", "prendront"];
var futurVouloir = ["voudrai", "voudras", "voudra", "voudra", "voudrons", "voudrez", "voudront", "voudront"];
var futurFaire = ["ferai", "feras", "fera", "fera", "ferons", "ferez", "feront", "feront"];
var futurAller = ["irai", "iras", "ira", "ira", "irons", "irez", "iront", "iront"];
var futurDire = ["dirai", "diras", "dira", "dira", "dirons", "direz", "diront", "diront"];
var futurPouvoir = ["pourrai", "pourras", "pourra", "pourra", "pourrons", "pourrez", "pourront", "pourront"];
var futurVoir = ["verrai", "verras", "verra", "verra", "verrons", "verrez", "verront", "verront"];

/*****************
 * CREATION HTML *
 ****************/
 
function createNewInput (base, motsAPlacer, inputBase) {
	switch (base) {		
		case base1:
			shuffle(base1, motsAPlacer);
			break;
		case base2:
			shuffle(base2, motsAPlacer);
			break;		
		}
	for (let i=0; i<motsAPlacer.length; i++) {
		var newDivMot = document.createElement('div');
		var newInput = document.createElement('input');
		newInput.type = 'checkbox';
		newInput.id = base[i]+i;
		var newLabel = document.createElement('label');
		newLabel.htmlFor = base[i]+i;
		newLabel.appendChild(document.createTextNode(motsAPlacer[i]));
		newDivMot.appendChild(newInput);
		newDivMot.appendChild(newLabel);
		inputBase.appendChild(newDivMot);
	}
	motsAPlacer.splice(0, motsAPlacer.length);
}

/*************
 * SELECTION *
 ************/
 
function selectSons(baseID) {
	for (let i=0; i<baseID.length; i++) {
		const x = document.getElementById(baseID[i]+i).addEventListener('change', ($event) => {
			if ($event.target.checked) {
				mots_places.push(baseID[i]);
				afficher_les_mots(mots_places);
				} else {
					const index = mots_places.indexOf(baseID[i]);
					mots_places.splice(index, 1);				
					afficher_les_mots(mots_places);
			}
		});
	}
}

function Select(sujet, verbe) {
	effacer();
	effacerBases();
	effacerInputBases ();
	affichage_sujet.textContent = " ";
	affichage_verbe.textContent = " ";
	base1 = sujet;
	base2 = verbe;
	createNewInput(base1, mots_a_placer1, input_bases1);
	createNewInput(base2, mots_a_placer2, input_bases2);
	selectSons(base1);
	selectSons(base2);
	}


const selectionNiveau = document.getElementById('niveau').addEventListener('change', ($event) => {
	switch ($event.target.value) {
		case 'imparfaitEtre':
			Select(pronomsElide, imparfaitEtre);
			break;
		case 'imparfaitAvoir':
			Select(pronomsElide, imparfaitAvoir);
			break;
		case 'imparfaitPremierGroupe':
			Select(pronoms, imparfaitPremierGroupe);
			break;
		case 'imparfaitPremierGroupeVerbesDifferents':
			Select(pronoms, imparfaitPremierGroupeVerbesDifferents);
			break;		
		case 'imparfaitFaire':
			Select(pronoms, imparfaitFaire);
			break;
		case 'imparfaitAller':
			Select(pronomsElide, imparfaitAller);
			break;	
		case 'imparfaitDire':
			Select(pronoms, imparfaitDire);
			break;
		case 'imparfaitVenir':
			Select(pronoms, imparfaitVenir);
			break;
		case 'imparfaitPouvoir':
			Select(pronoms, imparfaitPouvoir);
			break;
		case 'imparfaitVoir':
			Select(pronoms , imparfaitVoir);
			break;
		case 'imparfaitVouloir':
			Select(pronoms, imparfaitVouloir);
			break;
		case 'imparfaitPrendre':
			Select(pronoms, imparfaitPrendre);
			break;		
		case 'passeComposeEtre':
			Select(pronomsElide, passeComposeEtre);
			break;
		case 'passeComposeAvoir':
			Select(pronomsElide, passeComposeAvoir);
			break;
		case 'passeComposePremierGroupe':
			Select(pronomsElide, passeComposePremierGroupe);
			break;
		case 'passeComposePremierGroupeVerbesDifferents':
			Select(pronomsElide, passeComposePremierGroupeVerbesDifferents);
			break;
		case 'passeComposeAller':
			Select(pronoms, passeComposeAller);
			break;
		case 'passeComposeFaire':
			Select(pronomsElide, passeComposefaire);
			break;
		case 'passeComposeDire':
			Select(pronomsElide, passeComposeDire);
			break;
		case 'passeComposeVenir':
			Select(pronoms, passeComposeVenir);
			break;
		case 'passeComposePrendre':
			Select(pronomsElide, passeComposePrendre);
			break;
		case 'passeComposeVouloir':
			Select(pronomsElide, passeComposeVouloir);
			break;
		case 'passeComposePouvoir':
			Select(pronomsElide, passeComposePouvoir);
			break;
		case 'passeComposeVoir':
			Select(pronomsElide, passeComposeVoir);
			break;		
		case 'presentEtre':
			Select(pronoms, presentEtre);
			break;
		case 'presentAvoir':
			Select(pronomsElide, presentAvoir);
			break;
		case 'presentPremierGroupe':
			Select(pronoms, presentPremierGroupe);
			break;
		case 'presentPremierGroupeVerbesDifferents':
			Select(pronoms, presentPremierGroupeVerbesDifferents);
			break;		
		case 'presentFaire':
			Select(pronoms, presentfaire);
			break;
		case 'presentAller':
			Select(pronoms, presentAller);
			break;
		case 'presentDire':
			Select(pronoms, presentDire);
			break;
		case 'presentVenir':
			Select(pronoms, presentVenir);
			break;
		case 'presentPouvoir':
			Select(pronoms, presentPouvoir);
			break;
		case 'presentVoir':
			Select(pronoms, presentVoir);
			break;
		case 'presentVouloir':
			Select(pronoms, presentVouloir);
			break;
		case 'presentPrendre':
			Select(pronoms, presentPrendre);
			break;		
		case 'futurEtre':
			Select(pronoms, futurEtre);
			break;
		case 'futurAvoir':
			Select(pronomsElide, futurAvoir);
			break;
		case 'futurPremierGroupe':
			Select(pronoms, futurPremierGroupe);
			break;
		case 'futurPremierGroupeVerbesDifferents':
			Select(pronoms, futurPremierGroupeVerbesDifferents);
			break;
		case 'futurFaire':
			Select(pronoms, futurFaire);
			break;
		case 'futurAller':
			Select(pronomsElide, futurAller);
			break;
		case 'futurDire':
			Select(pronoms, futurDire);
			break;
		case 'futurVenir':
			Select(pronoms, futurVenir);
			break;
		case 'futurPouvoir':
			Select(pronoms, futurPouvoir);
			break;
		case 'futurVoir':
			Select(pronoms, futurVoir);
			break;
		case 'futurVouloir':
			Select(pronoms, futurVouloir);
			break;
		case 'futurPrendre':
			Select(pronoms, futurPrendre);
			break;
		}
	});



/********************
 * MISE A ZERO html *
 *******************/

function mise_a_zero() {
	effacerBases();
	effacerInputBases();
	effacerMotsAPlacer();
	effacerMotsPlacer();
	affichage_sujet.textContent = "";	
	affichage_verbe.textContent = "";	
	}

/************
 * AFFICHER *
 ***********/
	
function afficher_les_mots(mots_places) {		
	affichage_sujet.textContent = "";	
	affichage_verbe.textContent = "";
	for (compteur=0; compteur <mots_places.length; compteur +=1) {
		if (compteur % 2 != 0) {affichage_verbe.innerHTML += mots_places[compteur] + "<br>"}
		else {affichage_sujet.innerHTML += mots_places[compteur] + "<br>"}
	}
}	
/************
 * MELANGER *
 ***********/

function shuffle(array1, array2) {
	var currentIndex = array1.length;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		array2.push(array1[randomIndex]);
		const index = array1.indexOf(array1[randomIndex]);
		array1.splice(index, 1);
		}
		array1.push(...array2);
		return array2;
	}

/***********
 * EFFACER *
 **********/
 
function effacer() {
	var clist = document.getElementsByTagName("input");
	for (var i = 0; i < clist.length; i++) { clist[i].checked = false; }
	affichage_sujet.textContent = "";	
	affichage_verbe.textContent = "";
	mots_places.splice(0, mots_places.length);
	mots_places1.splice(0, mots_places1.length);
	mots_places2.splice(0, mots_places2.length);
	effacerInputBases();
	createNewInput(base1, mots_a_placer1, input_bases1);
	createNewInput(base2, mots_a_placer2, input_bases2);
	selectSons(base1);
	selectSons(base2);
	
}


