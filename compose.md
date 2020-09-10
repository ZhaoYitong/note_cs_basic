软件: 

1. 系统软件: 用来管理整个计算机系统

   语言处理程序

   操作系统

   服务性程序

   数据库管理系统

   网络软件

2. 应用软件: 按任务需要编制成的各种程序





高级语言				虚拟机器M3



汇编语言				虚拟机器M2



操作系统				虚拟机器



机器语言				实际机器M1



微指令系统			微程序机器M0





#### 冯 诺依曼计算机特点

1. 计算机由五大部件组成

   运算器 寄存器 控制器 输入设备 输出设备

2. 指令和数据以同等地位存于存储器，可按地址寻访
3. 指令和数据用二进制表示
4. 指令由操作码和地址码组成
5. 存储程序
6. 以运算器为中心





#### 系统复杂性管理的方法

—— 层次化 (Hierachy): 将被设计的系统划分为多个模块或子模块

—— 模块化(Modularity): 有明确定义(well-defined) 的功能和接口

—— 规则性(regularity): 模块更容易被重用





###### 存储单元  -- 存放一串二进制代码

###### 存储字 存储单元中二进制代码的组合

###### 存储字长 -- 二进制代码的位置，每个存储单元赋予一个地址

MAR 存储器地址寄存器 反应存储单元的个数

MDR 存储器数据寄存器  反应存储字长



MQ：乘商寄存器

|      | ACC              | MQ                 | X      |
| ---- | ---------------- | ------------------ | ------ |
| 加法 | 被加数和         |                    | 加数   |
| 减法 | 被减数差         |                    | 减数   |
| 乘法 | 乘积高位         | 乘数<br />乘积低位 | 被乘数 |
| 除法 | 被除数<br />余数 | 商                 |        |

![lib](C:\Users\Kerouac\Desktop\File\node_cs_basic\lib\img_compose\operator.png)





控制器功能:

解释指令

保证指令按照顺序执行



完成一条指令:

`取指令` PC  ===》 `分析指令`  IR  ===》`执行指令` CU



`PC` 存放当前欲执行指令的地址, 具有计数功能 (PC) + 1 ----> PC

`IR` 存放当前欲执行的指令





![](C:\Users\Kerouac\Desktop\File\node_cs_basic\lib\img_compose\control.png)



主机完成一条指令的过程:

以取数指令为例

![]()

![host](C:\Users\Kerouac\Desktop\File\node_cs_basic\lib\img_compose\host.png)





CPU: Central Processing Unit

中央处理器



PC: Program Counter

程序计数器, 存放当前欲执行指令的地址, 并可自动计数形成下一条指令地址的计数器



IR: Instruction Register 

指令寄存器, 存放当前正在执行的指令的寄存器



CU: Control Unit

控制单元(部件), 控制器中产生微操作命令序列的部件，为控制器的核心部件



ALU: Arithmetic Logic Unit

算术逻辑运算单元, 运算器中完成算术逻辑运算的逻辑部件



ACC: Accumulator

累加器， 运算器中运算前存放操作数，运算后存放运算结果的寄存器



MQ: Multiplier Quotient Register

乘商寄存器



X——此字母没有专指的缩写含义，可以用作任一部件名，在此表示操作数寄存器，即运算器中工作寄存器之一，用来存放操作数;





MAR: Memory Address Register

寄存器地址寄存器, 内存中用来存放欲访问存储单元地址的寄存器



MDR: Memory Data Register

存储器数据缓冲寄存器, 主存中用来存放从某单元读出或写入某存储单元数据的寄存器



I/O: Input/Output equipment: 输入/输出设备, 为输入设备和输出设备的总称, 用于计算机内部和外界信息的转换与传送







#### 总线

总线是连接各个部件的信息传输线，是<font color=blue>各个部件共享的传输介质</font>



传送

串行      并行



总线分类

1. 片内总线    				<font color=blue>芯片内部</font> 的总线
2. 系统总线                    <font color=blue>计算机各部件之间</font>  的信息传输线





数据总线				<font color=blue>双向</font>  与机器字长，存储字长有关



地址总线				<font color=blue>单向</font> 与存储地址，I/O地址有关 



控制总线				<font color=blue>有出</font>  <font color=blue>有入</font>  

存储器读、存储器写、总线允许、中断确认

中断请求，总线请求







通信总线：用于计算机系统之间 或 计算机系统与其他系统 (如控制仪表, 移动通信等) 之间的通信



传输方式：

串行通信总线

并行通信总线





![](C:\Users\Kerouac\Desktop\File\node_cs_basic\lib\img_compose\character.png)





1. 总线宽度							数据线 的根数
2. 标准传输率                        每秒传输的最大字节数(MBps)
3. 时钟同步/异步                   同步、不同步
4. 总线复用                            地址线 与 数据线 复用
5. 信号线数                            地址线、数据线和控制线的总和
6. 总线控制方式                    突发、自动、仲裁、逻辑、计数
7. 其他指标                            负载能力

总线判优控制



- 主设备 (模块)                      对总线有(控制权)
- 从设备(模块)                       响应从主设备发来的总线命令



- 总线判优控制					

  集中式           链式查询、计数器定时查询、独立请求方式

  分布式



总线通信控制

1. 目的  解决通信双方  协调配合 问题

2. 总线传输周期

   申请分配阶段	主模块申请，总线仲裁决定

   寻址阶段			主模块向从模块 给出地址 和 命令

   传数阶段			主模块和从模块   交换数据

   结束阶段			主模块  撤销有关信息





通信方式![](C:\Users\Kerouac\Desktop\File\node_cs_basic\lib\img_compose\trans_method.png)

![](C:\Users\Kerouac\Desktop\File\node_cs_basic\lib\img_compose\sycn_method_1.png)

![](C:\Users\Kerouac\Desktop\File\node_cs_basic\lib\img_compose\sycn_method_output.png)



![](C:\Users\Kerouac\Desktop\File\node_cs_basic\lib\img_compose\async_method.png)







![](C:\Users\Kerouac\Desktop\File\node_cs_basic\lib\img_compose\memory_3_characters.png)





缓存——主存层次和主存-辅存层次

![](C:\Users\Kerouac\Desktop\File\node_cs_basic\lib\img_compose\cache_main_memory.png)

![image-20200910001132432](C:\Users\Kerouac\Desktop\File\node_cs_basic\lib\img_compose\Allocate)