// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
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

const pAequorFactory = (number, array) => {
  return {
    _specimenNum: number,
    _arr: array,
    mutate() {
      let newDna = [];
      let baseArray = ["A", "T", "C", "G"];
      let randomDnaBaseIndex = Math.floor(Math.random() * this._arr.length);
      let mutated = this._arr[randomDnaBaseIndex];
      baseArray.splice(baseArray.indexOf[mutated], 1);
      this._arr.splice(
        randomDnaBaseIndex,
        1,
        baseArray[Math.floor(Math.random() * 3)]
      );
      return this._arr;
    },
    compareDNA(obj) {
      const dnaToCompare = obj;
    },
  };
};

const dnaTest = pAequorFactory(1, mockUpStrand());
console.log(dnaTest);
console.log(dnaTest.mutate());
