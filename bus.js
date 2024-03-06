function countPeopleOnBus(busStops) {
  let totalPeople = 0;

  for (const [on, off] of busStops) {
      totalPeople += on - off;
  }

  // Ensure the result is non-negative
  return Math.max(0, totalPeople);
}

// Example usage:
const busStopsExample = [
  [3, 0],
  [4, 2],
  [6, 5]
];

const result = countPeopleOnBus(busStopsExample);
console.log(result);