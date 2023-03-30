export const capitalizeEachFirstWorld: (str: string) => string = (str = '') => {
  const words = str?.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  const result = words.join(' ');
  return result;
};
