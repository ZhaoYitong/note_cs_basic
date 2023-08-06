class ipNode {
    subIpStr: string
    remainStr: string[]
    next: ipNode | null
    depth: number
    constructor() {

    }
}

function restoreIpAddresses(s: string): string[] {
    if (s.length > 12 || s.length < 4) {
        return []
    } else {
        // x + y + j + k = s.length
        // 1 <= (x,y,j,k) <= 3
        // 定义单一节点
        // 构造树
            // 找到深度为4的链路
                // 筛选掉不合法的链路
        
        // 优化时间效率
            // 构造树时的优化
                // 新增节点前的校验
                
        return []
    }
};