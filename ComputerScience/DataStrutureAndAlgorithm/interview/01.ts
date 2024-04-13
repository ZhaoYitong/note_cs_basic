// 寻找意见领袖，在一堆用户中寻找所有人都关注xx，而xx不关注任何人，这个xx即是意见领袖。
// 已知后端存在一个查询接口，api follow(a: string, b: string): boolean
//// 如何用最少的查询请求确定最终的意见领袖

const testMap: Record<string, string[]> = {
    a: ['b', 'c', 'd', 'e', 'f', 'g'],
    b: ['a', 'c', 'd', 'e', 'f', 'g'],
    c: ['a', 'b'],
    d: ['a', 'f'],
    e: ['a', 'b', 'c', 'd', 'f'],
    f: ['j'],
    g: ['f'],
    h: ['i', 'f'],
    i: ['f'],
    j: ['f'],
    k: ['f', 'e']
  }
  
  const testUsers: string[] = ['k', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  
  const getFollowResult = (a: string, b: string): boolean => {
    return testMap[a].includes(b)
  }
  
  const getStar = (userList: string[]) => {
    let idx = 0
    // 如果某个用户已经关注了其他用户，那么即使其他用户关注了他，他也不可能成为最终结果，则可以直接跳过
    let followers: Record<string, string> = {}
    let followed: Record<string, number> = {}
    while (idx < userList.length) {
      // 减少无效请求和遍历
      const current = userList[idx]
      if (followers[current]) {
        idx++
        continue
      }
      // 最后一个用户是未被检测的，所以后续追加处理
      for (let i = idx + 1; i < userList.length; i++) {
        const anotherUser = userList[i]
        const isCurrentFollowNext: boolean = getFollowResult(current, anotherUser)
        const isNextFollowCurrent: boolean = getFollowResult(anotherUser, current)
    
        if (isCurrentFollowNext && !isNextFollowCurrent) {
          followers[current] = current
          if (followers[anotherUser]) {
            // 说明anotherUser已经关注了其他成员
            continue
          } else {
            followed[anotherUser] = 1
          }
          // current 一定不是最终结果
          if (followed[current] > 0) {
            // 剔除current
            followed[current] = 0
          }
        } else if (!isCurrentFollowNext && isNextFollowCurrent) {
          followers[anotherUser] = anotherUser
          if (followers[current]) {
            // 说明current已经关注了其他成员
            continue
          } else {
            followed[current] = 1
          }
  
          if (followed[anotherUser]) {
            // 剔除anotherUser
            delete followed[anotherUser]
          }
        } else {
          // 双向关注/不关注
          // 统一归 followers
          followers[current] = current
          followers[anotherUser] = anotherUser
  
          if (followed[current] > 0) {
            // 剔除current
            followed[current] = 0
          }
  
          if (followed[anotherUser]) {
            // 剔除anotherUser
            followed[anotherUser] = 0
          }
        }
      }
      idx++
    }
  
    return Object.keys(followed).filter(key => followed[key] > 0)?.[0] || 'No result'
  }
  
  const re = getStar(testUsers)
  console.log(re)
  