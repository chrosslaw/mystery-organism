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

// Returns a DNA sample object. Requires a sample id number, and the mockUpStrand() function as arguments.
const pAequorFactory = (number, array) => {
  return {
    _specimenNum: number,
    _array: array,
    //Object function mutates one random DNA strand to one of the other three strands.
    mutate() {
      let newDna = [];
      let baseArray = ["A", "T", "C", "G"];
      let randomDnaBaseIndex = Math.floor(Math.random() * this._array.length);
      let mutated = this._array[randomDnaBaseIndex];
      baseArray.splice(baseArray.indexOf[mutated], 1);
      this._array.splice(
        randomDnaBaseIndex,
        1,
        baseArray[Math.floor(Math.random() * 3)]
      );
      return this._array;
    },
    //Object function to compare two DNA samples and displays the percentage of matching strands
    compareDNA(obj) {
      let comparedArray = [];
      const dnaToCompare = obj;
      for (i = 0; i < this._array.length; i++) {
        if (this._array[i] === dnaToCompare._array[i]) {
          comparedArray.push(this._array[i]);
        }
      }
      console.log(`Matching DNA strands: ${comparedArray}`);
      console.log(
        `specimen #${this._specimenNum} and specimen #${
          dnaToCompare._specimenNum
        } have ${
          (comparedArray.length / this._array.length) * 100
        }% DNA in common`
      );
    },
    //Object function checks for 60% or more Cs and G's. Returns true or false.
    willLikelySurvive() {
      let count = 0;
      for (let i of this._array) {
        if (i === "C" || i === "G") {
          count += 1;
        }
      }
      let result = (count / this._array.length) * 100 >= 60 ? true : false;
      return result;
    },
  };
};
//function takes a number as an argument, then creates an array of that many specimen objects.
const requestSamples = (num) => {
  sampleArray = [];
  let count = 0;
  while (count < num) {
    sampleArray.push(pAequorFactory(count, mockUpStrand()));
    count += 1;
  }
  return sampleArray;
};

const thirtySamples = requestSamples(30);
//console.log(thirtySamples);

//Test cases
thirtySamples[1].compareDNA(thirtySamples[2]);
console.log(
  `This sample is likely to survive: ${thirtySamples[1].willLikelySurvive()}`
);

console.log(`Before Mutation: ${thirtySamples[1]._array}`); //before mutation
thirtySamples[1].mutate();
console.log(` After Mutation: ${thirtySamples[1]._array}`); //after mutation
