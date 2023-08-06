// T means unknown, TYPE unknow is subset of TYPE any
function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;

  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

// React useState
const [strGetter, strSetter] = simpleState(66);
console.log(strGetter());
strSetter(58);
console.log(strGetter());

const [str1Getter, str1Setter] = simpleState<string | null>(null);
console.log(str1Getter());
str1Setter("test");
console.log(str1Getter());

interface Rank<RankItem> {
  item: RankItem
  rank: number
}

function ranker<RankerItem>(
  items: RankerItem[],
  rank: (v: RankerItem) => number
): RankerItem[] {
  const ranks = items.map((item) => {
    return {
      item,
      rank: rank(item),
    };
  });

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}


