import React, { PropTypes } from 'react';
import { Table, Pagination } from 'antd';
import styles from './List.less';
import { pathname } from '../../utils/utils';

class List extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      list: [],
      // data: [],
      render: false,
    };
    const { changeStatus } = this;
    // window.addEventListener('scroll', changeStatus, false);
  }

  // componentWillReceiveProps(nextProps){
  //   console.log('listProps', nextProps);
  //   const { loading, data } = nextProps;
  //   if (!loading&&this.props.loading) {
  //     let list = data;
  //     if (data.length>50) {
  //       list = data.slice(0,50);
  //     }
  //     this.setState({list});
  //   }
  // }

  // componentDidMount() {
  //   window.table = this.refs.table;
  //
  // }

  changeStatus = ()=> {
    this.forceUpdate();
    console.log(2);
  }

  // componentWillUnmount() {
  //   console.log('asda');
  // }
  //
  // componentDidUpdate(prevProps, prevState){
  //   console.log('componentDidUpdate');
  //   const { list } = this.state;
  //   const { data } = this.props;
  //   if (list.length<data.length) {
  //     console.log(list,data);
  //     let newList = data;
  //     let num = 50;
  //     if (data.length>200) {
  //       num = data.length/5;
  //     }
  //     if (data.length-list.length>num) {
  //       newList = data.slice(0,list.length+num);
  //     }
  //     setTimeout(()=>{
  //       this.setState({list: newList});
  //     },1000);
  //   }
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('listUpdate',nextState);
  //   const { render } = nextState;
  //   return render
  // }
  onScrollChange = ()=> {
    console.log(...arguments);
  }

  render() {
    // console.log('render list');
    const {
      data,
      size, //default ,small
      loading,
      columns,
      rowKey,
      index,
      total,
      number,
      scrollX,
      scrollY,
      expanded,
      showExpanded, //显示展开行
      rowSelection,
      isShowPage, //显示分页
      onListChange, //翻页变换
      handleTableChange,
    } = this.props;
    let tableSize = sessionStorage.getItem('DeviceType')==2?'small':'default';

    return (
      <div ref="table" >
        <Table
          columns={columns}
          rowKey={(record,i) => record[rowKey]}
          dataSource={data}
          size={size||tableSize}
          loading={loading}
          scroll={{ x: scrollX, y: scrollY }}
          rowSelection={rowSelection}
          expandedRowRender={showExpanded&&expanded?(record => <p>{record.address}</p>):null}
          onChange={handleTableChange}
          pagination={isShowPage?false:{
            defaultCurrent: 1,
            defaultPageSize: number,
            showQuickJumper: true,
            showSizeChanger: true,
            pageSizeOptions:['10','50','200','1000','10000']
          }}
        />
        {/* <div onCompositionEnd={this.onScrollChange}>1111111</div> */}
        {
          isShowPage?(<Pagination showSizeChanger showQuickJumper
            pageSizeOptions={['10','50','500','1000','10000']}
            className={styles.pagination}
            total={total}
            size={size||tableSize}
            current={index}
            pageSize={number}
            onChange={(page,number)=>onListChange(page,number)}
            onShowSizeChange={(page,number)=>onListChange(page,number)}
          />):null
        }
      </div>
    );
  };
};

List.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  rowKey: PropTypes.string.isRequired,
  size: PropTypes.string,
  expanded: PropTypes.string,
  isShowPage: PropTypes.bool,
  showExpanded: PropTypes.bool,
  rowSelection: PropTypes.object,
  total: PropTypes.number,
  index: PropTypes.number,
  number: PropTypes.number,
  onListChange: PropTypes.func,
  handleTableChange: PropTypes.func,
  scrollX: PropTypes.number,
  scrollY: PropTypes.number,
};

List.defaultProps = {
  showExpanded: false,
  isShowPage: false,
  rowSelection: null,
  number: 10,
  scrollX: 500,
  scrollY: 0,
};

export default List;
