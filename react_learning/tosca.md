#### TOSCA 定义
https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=tosca

- Abstract Base Types
- Custom Workflows and Lifecycle Events
- Substitution mapping properties expanded
- Artifact processing directives
- Policy triggers for event-condition-action
- Target node filtering (abstract, concrete) to facilitate orchestrator implementation

区别于 Terraform 

不用关注配置参数细节, 更多注重节点和阶段之间的连接关系以及节点内部必要属性的设置

```Yaml
// TOSCA
node_templates:
    Instance:
        type: aliyun.nodes.Instance
        capabilities:
            scalables:
                properties:
                    min_instances: 1
                    max_instances: 1
                    default_instances: 1
        requirements:
            dependency:
                node: SecurityGroup
                capability: tosca.capabilities.Node
                relationship: tosca.relationships.DependsOn
    SecurityGroup:
        type: aliyun.nodes.SecurityGroup
        requirements: []


// Terraform
resource "alicloud_instance" "instance" {
    #cn-beijing
    availiability_zone = "cn-beijing-b"
    security_groups = alicloud_security_group.default.*.id

    # series III
    instance_type    = "ecs.n2.small"
    system_disk_category   = "cloud_effiency"
    image_id        = "ubuntu"
    instance_name   = "test_foo"
    vswitch_id      = "alicloud_vswitch.vsw.id"
    internet_max_bandwidth_out = 10
    password = "fasdfewaefea"

}
```


#### 底层实现 
d3
