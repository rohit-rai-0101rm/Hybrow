const getFrequency = (str) => {
    const counts = {};
    for (const s of str) {
      if (counts[s]) {
        counts[s]++
      } else {
        counts[s] = 1
      }
    }
    return counts;
  }
  
  const str = "Amolya Sharma";
  const trimStr=str.split(' ').join('');
  console.log(getFrequency(trimStr))