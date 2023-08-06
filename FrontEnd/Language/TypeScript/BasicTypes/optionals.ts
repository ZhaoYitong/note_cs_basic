function addWithCb(x: number, y: number, callback?: () => void) {
  console.log([x, y])
  callback?.();
}