## 基本概念
CMP多云混合编排

### 蓝图

- 概念
蓝图可以实现对不同资源之间的混合编排, 通过定义节点关系, 节点属性(包括输入输出信息, 内置属性等), 来实现一个服务从`创建 --> 发布 --> 部署 --> 卸除` 的整个生命周期的管理

蓝图编排通常需要一个统一的语言规范, 来约束编排规则。 目前大部分云应用编排工具(如[Cloudify](https://cloudify.co/) 和 [Terraform](https://www.terraform.io/)都是基于`TOSCA`标准。这里区别于[AWS CloudFormation](https://aws.amazon.com/cloudformation/), CloudFormation 使用 AWS自定义的语言规范来编排AWS内部的组件应用。


### TOSCA
- 基本概念

 云应用拓扑和编排`规范`（Topology and Orchestration Specification for Cloud Applications，简称[TOSCA](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=tosca)）是一种用于描述在云计算平台上的服务和应用程序以及它们之间的关系和依赖性的语言规范。TOSCA可以描述云计算服务及其组件，并记录这些组件的组织方式以及使用或修改这些组件和服务所需的编排流程。这为管理员提供了一种管理云应用程序和服务的通用方法，从而使这些应用程序和服务可以跨不同云供应商的平台进行移植。([摘](https://mp.weixin.qq.com/s/qsrJfpx0C5sWPA1YS9WJaA))

- 特性
1. 建模结构图形化
  - nodes
    - 可以是基础组件(Subnet, network, server, a cluster of servers or software component(a service or a runtime environment))
  - relationships
    - 定义nodes 之间的关系

![基本的TOSCA图形元素框架图](https://mmbiz.qpic.cn/mmbiz_png/v763enzKgu0PVJnXTpzhWNg8gQC5gz1kkYTMu1ry7UpDAzIIVP1Yf5c9RUVpyyb3VEBh26JWSOibvLlrLX0cgWQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

2. 组件模式

模型不会尝试进一步指定组件是原子组件还是复合组件(系统被建模为组件的集合，其中每个组件都被明确定义为原子的或复合的)，并且组件本身也不会进一步对其内部组成进行建模, 因此足够灵活

![组件模式图示](https://mmbiz.qpic.cn/mmbiz_png/v763enzKgu0PVJnXTpzhWNg8gQC5gz1kFrws9GHPe9RibcibvjiaUhluRriaiaPZxPG8WHXvb2vHjqGFpZbn5LZpOvg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)


3. 统一运行，编排和设计时间
- 模型用于表示系统的运行时状态，也可用于该系统的运营管理(Day1, Day2)。

- 模型可用作表示（模型驱动的）编排过程的预期结果的意图模型。

- 模型可以在设计时来创建可重用的服务组件。


- 基于TOSCA编排YAML案例
![基于TOSCA编排 YAML例子](https://docs.cloudify.co/latest/images/composer/source-view.png)


- TOSCA未来会支持 
  - 任意云应用的便捷部署
  - 已存在云应用的平缓迁移
  - 任意云应用的扩展

### 云应用编排工具 Terraform & Cloudify
- Terraform
是 HashiCorp 推出的基础设施即代码工具。
使用声明式的配置语言(HCL/JSON)来实现外部资源的通过一管理(包括用户想要实现的CRUD操作)工具
具备以下优势:

• 基于 IaC（基础设施即代码，Infrastructure as Code）的设计，可以将基础设施以一种领域特定语言描述出来，消除了在基础设施自动化时描述语义上的歧义，同时减轻了人为因素造成的不确影响。

• Terraform 在执行编排动作前，会生成一份可读性良好的执行计划，关键基础设施的变更可以得到充分审查，保证了基础设施的可靠性。

• 基于 DAG（有向无环图，Directed Acyclic Graph）描述资源与资源之间的关系，由于 DAG 良好的拓扑性质，当资源属性与资源关系发生改变时，变更动作将被充分并行地执行。

- Cloudify
一款开源的多云多节点编排工具。Cloudify使组织能够将其现有基础架构与云原生和分布式边缘资源一起自动化，从而使组织轻松过渡到公有云和云原生体系结构。同时允许CI/CD管理不同的业务和自动化流程。

- Terraform vs Cloudify

  a. terraform
  - 支持大部分云平台并提供对主流服务提供厂商的兼容方案
  - YAML-like 语言， 容易上手
  - 快速启动， API轻量，适用于中小型部署
  - 广泛应用, 甚至可以部署k8s
  - - - 
  - 

  b. Cloudify
  - 

- blueprint 定义 YAML

  [cloudify blueprint example](https://github.com/cloudify-cosmo/cloudify-nodecellar-example/blob/master/local-blueprint.yaml)

![Composer Main Page](https://docs.cloudify.co/latest/images/composer/composer_interface.png)

`待确认`

cloudify 这部分后端的实现原理，如何对接

- - -

## 蓝图技术实现

### 前端

共筛选出以下三个比较成熟、适合接入且一直在维护迭代的方案

- D3.js
- AntV G6 
- Alibaba butterfly 一个基于JS的数据驱动的节点式编排组件库

不同组件的定义会有?????

#### [D3.js](https://d3js.org/)


Pros:

- 基于SVG, 操作方法类似于`jQuery`操作DOM, 更容易基于事件控制
- 有充足的基础图形库, 可定制化程度高, 自由度高

Cons:

- 需要基础封装工作
- 暂无比较成熟的react框架下使用D3的方案

#### [G6](https://g6.antv.vision/)

Pros:

- ZStack mini && ZStack 都在使用
- AntV 官网即为 React 实现, 可能实现上更兼容
- 基于Canvas, 便于渲染复杂场景下的节点关系

Cons:

- 自由度上应该不如 D3, 定制性上相对欠缺
- 暂不清楚拖拽后组件组合显示的可行性以及场景(如拖拽实现 Instance 嵌套 Volume 组件)

#### [butterfly](https://github.com/alibaba/butterfly)

[背景介绍](https://juejin.im/post/6867421471497519117)

Pros:
- 阿里云轻量级开源前端图编排组件, 定位上更符合云组件编排的需要
- 官方介绍是 10000个节点为性能的极限
- 具有 `首屏逐次渲染`、`局部渲染`和`批量操作`

Cons:
- API文档不够齐全, source-code 只是提供了example 开发时更多时候需要源码阅读
- star数最少, 虽然和 G6 同一时间产生, 但基础建设不全

![渲染速度对比, alibaba提供](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9hdGEyLWltZy5vc3MtY24temhhbmdqaWFrb3UuYWxpeXVuY3MuY29tL2RjZDNkYTRiY2U5MGU1NDNkNGU2NDBlMDI1MWNlMDZkLnBuZw?x-oss-process=image/format,png)

#### SVG VS CANVAS

摘要:
- 一种推荐是 SVG是默认选择, 当 SVG 无法处理时再考虑用 Canvas

- 大量复杂精密计算场景, 考虑用 Canvas

[Canvas vs SVG 性能使用场景对比](https://g2.antv.vision/zh/docs/manual/tutorial/renderer)

[使用SVG还是Canvas](https://css-tricks.com/when-to-use-svg-vs-when-to-use-canvas/)

![preview](https://pic1.zhimg.com/v2-19a808f0d32b4ed9ec2eafe6f7d98a5c_r.jpg)

### 后端
尚不清楚, 需要后端童鞋协作调研!!!

## 未来或需要解决的困难
- 功能设计
1. 蓝图涉及服务的创建, 发布, 管理 整个声明周期。功能结合 ZStack CMP 上如何合理设计

- 技术实现 
1. 后端如何定义并处理蓝图, 前后端的处理协作, 对 terraform 以及 cloudidy 需要进一步的调研
2. UI 蓝图的实现技术的选择
3. 未来可能会有技术痛点, 复杂交互或者性能渲染方面
4. 尚不清楚 Terraform 和 Cloudify 的开源程度

## 主要参考引用
[Cloudify](https://cloudify.co/blog/what-is-tosca-cloud-application-orchestration-tutorial-cloudify/)

[关于TOSCA](https://mp.weixin.qq.com/s/qsrJfpx0C5sWPA1YS9WJaA)

[关于Terraform](http://www.cloudchef.io/h-nd-120.html#_np=129_991)



