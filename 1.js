const giftIds = [5, 1, 0, 1, 5, 2, 2, 1, 1];

function findFirstRepeated(gifts) {
  const repeatedIds = gifts.filter(
    (id, index) => gifts.indexOf(id) !== index
  );
  return repeatedIds.length > 0 ? repeatedIds[0] : -1;
}

const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId);