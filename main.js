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
    _array: array,
    mutate() {
      let newDna = [];
      let baseArray = ["A", "T", "C", "G"];
      let randomDnaBaseIndex = Math.floor(Math.random() * this._array.length);
      let mutated = this._arr[randomDnaBaseIndex];
      baseArray.splice(baseArray.indexOf[mutated], 1);
      this._arr.splice(
        randomDnaBaseIndex,
        1,
        baseArray[Math.floor(Math.random() * 3)]
      );
      return this._array;
    },
    compareDNA(obj) {
      let comparedArray = [];
      const dnaToCompare = obj;
      for (i = 0; i < this._array.length; i++) {
        if (this._array[i] === dnaToCompare._array[i]) {
          comparedArray.push(this._arr[i]);
        }
      }
      console.log(comparedArray);
      console.log(
        `specimen #${this._specimenNum} and specimen #${
          comparedArray._specimenNum
        } have ${
          (comparedArray.length / this._array.length) * 100
        }% DNA in common`
      );
    },
    willLikelySurvive() {
      let count = 0;
      for (let i of this._array) {
        if (i === "C" || i === "G") {
          count += 1;
        }
      }
      return (count / this._array.length) * 100 >= 60 ? true : false;
    },
  };
};

const specimen1 = pAequorFactory(1, mockUpStrand());
const specimen2 = pAequorFactory(2, mockUpStrand());
console.log(specimen1.willLikelySurvive());
// console.log(specimen2);
// console.log(specimen1.compareDNA(specimen2));
