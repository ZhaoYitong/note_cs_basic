export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

export type MutationFuntion = (v: number) => number

export function arraryMutate(
  numbers: number[],
  mutate: MutationFuntion
): number[] {
  return numbers.map(mutate);
}

console.log(arraryMutate([1, 2, 3], (v) => v * 10));

// function currying
export function createAdder(num: number) {
  return (val: number) => num + val
}

const addOne = createAdder(1)

console.log(addOne(2))

console.log(createAdder(2)(5))
