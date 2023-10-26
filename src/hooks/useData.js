// dummy data for graphs

const useData = () => {
  const randomNumbers = [];
  for (let i = 0; i < 100; i++) {
    randomNumbers.push(Math.floor(Math.random() * 101));
  }
  return randomNumbers;
};

export default useData;
