exports.handler = async (event) => {
  // TODO implement
  const randomNumber = Math.round(Math.random() * 10)

  class CustomError extends Error {
    constructor(name = 'bar', ...params) {
      super(...params);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, CustomError);
      }  
      this.name = name;
      this.date = new Date();
    }
  }
  

  if(randomNumber < 3){
    throw new CustomError('LowNumber', 'This is a low Number')
  } else if (randomNumber > 7){
    throw new CustomError('HighNumber', 'This is a High Number')
  }
  return randomNumber;
};
