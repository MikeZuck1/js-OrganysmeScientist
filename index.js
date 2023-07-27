// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

// Returns a random DNA base
const returnRandBase = () => {
  // tableau contient 4 lettres A => Adénine => T => Thymine => C => Cytosine => G => Guanine
  const dnaBases = ['A', 'T', 'C', 'G'];
  // selectionne aléatoirement une base et renverra la base 'A', 'T', 'C', ou 'G'
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Cette fonction prend deux paramètres => un nombre et une ADN de 15 bases
const pAequorFactory = (num, bases) => {
  // retourner un objet contenant les propriétés specimenNum et dna correspondant aux paramètres fournis => (num et dnaBases)
  return {
    _specimenNum: num,
    _dna: bases,
    // simulation du taux de mutation élévé de P.aequor (modification de son ADN)
    mutate() {
      // sélectionner au hasard une base dans la propriété de l'objet dna et changer la base actuelle en une base différente
      randomBase = Math.floor(Math.random() * 15);
      // Si la base sélectionner au hasard est la première et qu'elle est 'A', la base doit être remplacée par 'T' 'C' ou 'G'
      randomBaseNoA = ['T', 'C', 'G'];
      randomBaseNoT = ['C', 'G', 'A'];
      randomBaseNoC = ['G', 'A', 'T'];
      randomBaseNoG = ['A', 'T', 'C'];

      if (this._dna[randomBase] === 'A') {
        this._dna[randomBase] = randomBaseNoA[Math.floor(Math.random() * 3)]
      } else if (this._dna[randomBase] === 'T') {
        this.dna[randomBase] = randomBaseNoT[Math.floor(Math.random() * 3)]
      } else if (this._dna[randomBase] === 'C') {
        this.dna[randomBase] = randomBaseNoC[Math.floor(Math.random() * 3)]
      } else if (this._dna[randomBase] === 'G') {
        this.dna[randomBase] = randomBaseNoG[Math.floor(Math.random()) * 3]
      }

      return this.dna;
    },
    // Le but est de comparer les séquences d'ADN de différents P.aequor => consiste à comparer les pAequor actuels avec les dna passées et calculer combien de bases sont identiques et aux mêmes emplacements.
    compareDNA() {
      numberCommonality = 0;

      for (let i = 0; i < pAequor['dna'].length; i++) {
        if (pAequor.dna[i] === this._dna[i]) {
          numberCommonality;
        }
      };

      parentCommonality = ((numberCommonality / 15) * 100).toFixed(2);
      console.log(`Specimen #${this._specimenNum} and Specimen #${this.pAequor._specimenNum} have ${parentCommonality}% DNA in commun.`);
      // exemple de sortie : specimen #1 and specimen #2 have 25% DNA in common
    },
    // pAequor a plus de chances de survivre si son ADN est composé d'au moins 60% de bases 'C' et 'G'
    // la fonction willLikelySurvive() renvoie 'true' si le tableau de l'objet 'dna' contient au moins 60% de bases 'C' et 'G' ou dans le cas contraire 'false'
    willLikelySurvive() {
      cAndGCounter = 0;
      for (let i = 0; i < this._dna.length; i++) {
        if (this._dna[i] === 'C' || this._dna[i] === 'G') {
          cAndGCounter++;
        }
      }
      if (cAndGCounter < 9) {
        return false;
      } else {
        return true;
      }
    }
  };
};

// créer 30 instances de pAequor capable de survivre dans leur environnement naturel 
const survivor = [];
while (survivor.length < 30) {
  pAequorNumber = survivor.length + 1;
  newpAequor = pAequorFactory(pAequorNumber, mockUpStrand());
  if (newpAequor.willLikelySurvive() === true) {
    survivor.push(newpAequor)
  }
}
console.log(survivor);

/**
const test1 = pAequorFactory(1, mockUpStrand());
const test2 = pAequorFactory(2, mockUpStrand());
console.log(test1._dna);
console.log(test2._dna);
test1.compareDNA(test2);
console.log(test1.willLikelySurvive());
console.log(test2.willLikelySurvive());
 */



