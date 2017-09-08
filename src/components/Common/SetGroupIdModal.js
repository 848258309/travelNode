import React, { PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Modal, Select, message, InputNumber } from 'antd';
import styles from './SetGroupIdModal.less';
const FormItem = Form.Item;
const { Option, OptGroup } = Select;

class SetGroupIdModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    context.router;
    this.state = {
      InputWidth: 150,
      listArray: [],
      defaultName: null,
      groupList: [],
      // defaultSet: false,
      companyMap: new Map(),
      companyArray: [],
      remarkArray: [],
      selectGroup: [],
      selectAllGroup: [],
      selectCompany: null,
      remarkValue: '全部',
    }
  }

  componentWillReceiveProps(nextProps) {
    const { visible, type, data, adManage:{list, loading}} = nextProps;
    const { companyMap, listArray, selectAllGroup } = this.state;

    if (visible&&this.props.visible==false) {//初始化listArray和selectGroup
      nextProps.form.resetFields();
      if (listArray.length==0&&list.length>0&&!loading) {
        console.log("set listArray");
        let listArray = [];
        let selectGroup = [];
        let companyArray = ['全部'];
        list.forEach((item,index,array) => {//遍历生成selectGroup和listArray
          const groupId = item.groupId.toString();
          const company = item.company!=undefined&&item.company!=''?item.company:'无';
          const remark = item.remark!==''?item.remark:'无';
          const name = company === '无'? company : company+","+remark;
          let companyObj = {remark: new Map(),groupId: []};
          let remarkArray = [];
          if (companyMap.has(company)) {
            companyObj = companyMap.get(company);
            if (companyObj.remark.has(remark)) {
              remarkArray = companyObj.remark.get(remark);
              let i = listArray.findIndex((n) => n.company === company);
              listArray[i].list.push(groupId);
            } else {
              listArray.push({name, company, remark, list:[groupId]});
            }
          } else {
            companyArray.push(company);
            listArray.push({name, company, remark, list:[groupId]});
          }
          remarkArray.push(groupId);
          companyObj.groupId.push(groupId);
          companyObj.remark.set(remark,remarkArray);
          companyMap.set(company,companyObj);
          selectGroup.push(groupId);
          // if (index!=0) {
          //   listArray.forEach((item1,index1,array1) => {
          //     if (item1.name == name) {
          //       isSet =true;
          //       item1.list.push(groupId);
          //     }
          //   });
          // }
        });
        listArray.sort(function(a,b){
          let result = a.company.length - b.company.length;
          return result;
        });
        this.setState({ listArray, companyMap, selectGroup, selectAllGroup: selectGroup, companyArray });
      } else {
        this.setState({selectGroup: selectAllGroup});
      }

      const defaultName = data.name;
      const groupList   = [...new Set(data.list)];
      this.setState({defaultName, groupList, remarkValue: '全部'});
    }
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'adManage/getAdList',
      payload: {index:1,number:500000,status:2}
    });
  }

  handleChange = (type,value)=>{
    // console.log(`selected ${value}`);
    const { companyMap, selectCompany, selectAllGroup } = this.state;
    let selectGroup = [];
    if (type === 1) {
      let remarkArray = ["全部"];
      if (value !== "全部") {
        for (let key of companyMap.get(value).remark.keys()) {
          remarkArray.push(key);
        }
        selectGroup = companyMap.get(value).groupId;
      }else{
        selectGroup = selectAllGroup;
      }
      this.setState({ remarkArray, selectGroup, selectCompany: value, remarkValue: "全部" });
    } else if (type === 2) {
      if (value === "全部") {
        selectGroup = companyMap.get(selectCompany).groupId;
      }else{
        selectGroup = companyMap.get(selectCompany).remark.get(value);
      }
      this.setState({ selectGroup, remarkValue: value });
    }
  }

  handleClick = (type) => {
    let newGroup = [];
    if (type === 1) {
      const { selectGroup, groupList } = this.state;
      const newGroupSet = new Set([...selectGroup,...groupList]);
      newGroup = [...newGroupSet];
    }
    this.setState({ groupList: newGroup });
  }

  handleGroupChange = (value) => {
    this.setState({ groupList: value });
  }

  handleOk = () => {
    const { groupList } = this.state;
    const { type, price, data, onOk, form: {validateFields,getFieldsValue}} = this.props;
    validateFields((errors) => {
      if (errors) {
        return;
      }
      // if (groupList.length == 0) {
      //   message.error('设备不能为空');
      //   return;
      // }
      if (type === 2&& getFieldsValue().price === undefined) {
        message.error('价格不能为空');
        return;
      } else if (type == 2&&getFieldsValue().price<groupList.length) {
        message.error('价格不能小于设备数');
        return;
      }
      let isChange = false;
      let dataMap = {};
      const defaultGroup = data.list;
      for (let key in data) {
        if (key !== 'list') {
          dataMap[key] = data[key];
        }
      }
      if (groupList.sort().toString() !== defaultGroup.sort().toString()) {
        isChange = true;
        if (type === 0) {
          dataMap.groupId = groupList.join(",");
        } else if (type === 1||type === 2) {
          dataMap.groupAdd = groupList.filter(x => !(defaultGroup.indexOf(x)!==-1)).join(",");
          dataMap.groupDel = defaultGroup.filter(x => !(groupList.indexOf(x)!==-1)).join(",");
        }
      }
      if (type === 2&&getFieldsValue().price !== price) {
        isChange = true;
        dataMap.price = getFieldsValue().price;
      }
      if (isChange) {
        onOk(dataMap);
      } else {
        message.error('请先选择要修改的内容');
      }
    });
  }

  render() {
    const { listArray, InputWidth, defaultName, groupList, companyArray, remarkArray, remarkValue } = this.state;
    const { visible, title, price, type, loading, data, onCancel, form: {getFieldDecorator}} = this.props;
    // console.log(companyArray,listArray );

    const modalOpts = {
      title,
      visible,
      confirmLoading:loading,
      onOk: this.handleOk,
      onCancel: onCancel,
    };

    const InputForm = (<FormItem className={styles.item} label="红包总金额" >
      {getFieldDecorator('price', {
        initialValue: price || 100,
      })(
        <InputNumber style={{ width: InputWidth }} min={1} step={1} disabled={false} />
      )}
    </FormItem>);

    return (
      <Modal {...modalOpts}>
        <Form layout='horizontal'>
          <FormItem className={styles.item} label="名称" >
            <Input value={defaultName} disabled={true} />
          </FormItem>
          <FormItem className={styles.item} label="属性选择" >
            <div className={styles.select1}>
              {getFieldDecorator('company', {
                initialValue: "全部",
              })(
                <Select style={{ width: InputWidth }} onChange={this.handleChange.bind(this, 1)}>
                  {
                    companyArray.map((item, i) => {
                      return <Option value={item} key={i} >{item}</Option>
                    })
                  }
                </Select>
              )}
            </div>
            <div className={styles.select2}>
              {/* {getFieldDecorator('remark', {
                initialValue: remarkValue,
              })( */}
              <Select value={remarkValue} style={{ width: InputWidth }} onChange={this.handleChange.bind(this, 2)}>
                {
                  remarkArray.map((item, i) => {
                    return <Option value={item} key={i} >{item}</Option>
                  })
                }
              </Select>
              {/* )} */}
            </div>
            <Button size="default" type="primary" onClick={this.handleClick.bind(this, 1)} >添加</Button>
            <Button size="default" type="danger" style={{marginLeft: 25}} onClick={this.handleClick.bind(this, 2)} >清空</Button>
          </FormItem>
          <FormItem className={styles.item} label={`设备(已选${groupList.length}台)`} >
            <Select mode="multiple" value={groupList} onChange={this.handleGroupChange} >
              {
                listArray.map((item, i) => {
                  return <OptGroup label={item.name} key={i}>{item.list.map((item1, index) => {return <Option value={item1.toString()} key={i+index} >{item1}</Option>})}</OptGroup>
                })
              }
            </Select>
          </FormItem>
          {type===2?InputForm:null}
        </Form>
      </Modal>
    );
  };
};
// const SetGroupIdModalForm = Form.create()(SetGroupIdModal);
const mapStateToProps = ({ adManage }) => ({ adManage });
export default Form.create()(connect(mapStateToProps)(SetGroupIdModal));
