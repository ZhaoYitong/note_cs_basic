// T O(Max(M,N)) S O(Min(M,N))
function addBinary(a: string, b: string): string {
    let ac = a.length - 1
    let bc = b.length - 1
    let result = ''
    let addon = 0
    while (ac >= 0 || bc >= 0) {
        const aTn = ac >= 0 ? Number(a[ac]) : 0
        const bTn = bc >= 0 ? Number(b[bc]) : 0
        const cur = (aTn + bTn + addon) % 2
        addon = Math.floor((aTn + bTn + addon) / 2)
        result = String(cur) + result
        ac--
        bc--
    }
    if (addon > 0) {
        result = String(addon) + result
    }

    return result
};