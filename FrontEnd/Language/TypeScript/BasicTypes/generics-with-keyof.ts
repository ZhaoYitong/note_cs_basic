function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dogs = [
  {
    name: "testA",
    age: 2,
  },
  {
    name: "testkkk",
    age: 5,
  },
];

console.log(pluck(dogs, "age"));
console.log(pluck(dogs, "name"));

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}

sendEvent("addToCart", { productID: "test", quantity: 2, time: 2, user: "ba" });

sendEvent("checkout", { time: 4, user: "jii" });
