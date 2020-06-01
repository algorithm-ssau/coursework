const formatNumber = (() => {
  const provider = new Intl.NumberFormat('ru-RU');
  return (n) => provider.format(n);
})();

const extractPart = (n) => n.toFixed(2).slice(2);

export default (price) => {
  const n = price | 0;
  return `${formatNumber(n)}.${extractPart(price - n)} $`;
};
