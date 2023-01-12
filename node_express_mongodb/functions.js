// arrow syntax function definition
const logDirname = () => {
  console.log(__dirname);
};

// necessary for exposing local symbols to exporters
module.exports = logDirname;
