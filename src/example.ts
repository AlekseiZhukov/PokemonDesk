function concat(word1: string, word2: string): string {
  return word1 + word2;
}
concat('Hello ', 'Word!');

interface myHometask {
  howIDoIt: string;
  simeArray: [string, string, number];
  withData: [
    {
      howIDoIt: string;
      simeArray: [string, number];
    },
  ];
}

const myHometask: myHometask = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

interface MyArray<T> {
  [n: number]: T;

  reduce(fn: (accumulator: number, el: T) => T, initial?: number): number;
  reduce<N>(fn: (accumulator: N, el: T) => T, initial: N): N;
}

const tsArr: MyArray<string> = ['1', '2', '3'];

tsArr.reduce((accumulator, el) => accumulator + el);
