/*
def permutations(iterable, r=None):
// permutations('ABCD', 2) --> AB AC AD BA BC BD CA CB CD DA DB DC
// permutations(range(3)) --> 012 021 102 120 201 210
pool = tuple(iterable)
n = len(pool)
r = n if r is None else r
if r > n:
return
indices = list(range(n))
cycles = list(range(n, n-r, -1))
yield tuple(pool[i] for i in indices[:r])
while n:
for i in reversed(range(r)):
cycles[i] -= 1
if cycles[i] == 0:
indices[i:] = indices[i+1:] + indices[i:i+1]
cycles[i] = n - i
else:
j = cycles[i]
indices[i], indices[-j] = indices[-j], indices[i]
yield tuple(pool[i] for i in indices[:r])
break
else:
return
 */

export const combine = (L) => {
  const result = [];
  for (let i = 1; i <= 3; i += 1) {
    for (let j = 1; j <= 3; j += 1) {
      for (let k = 1; k <= 3; k += 1) {
        // check if the indexes are not same
        if (i != j && j != k && i != k)
          result.push([i, j, k]);
      }
    }
  }
  return result;
}

export const allCombinations = (value) => {
  const combinations = [];
  const combinationsLength = Math.pow(2, value.length);

  let temp = "";
  for (let i = 0; i < combinationsLength; i += 1) {
    temp = "";
    for (let j = 0; j < value.length; j += 1) {
      if ((i & Math.pow(2, j)))
        temp += temp.length === 0 ? value[j] : ',' + value[j];
    }
    if (temp !== "") {
      combinations.push(temp);
    }
  }

  return combinations;
}

export const permutations11 = arr => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
          item,
          ...val,
        ])
      ),
    []
  );
};




