import React from 'react';
import { Form, Upload, Icon, Modal, Button, Input, message } from 'antd';
// import { observable, computed, useStrict, action, autorun } from 'mobx';
import { observer, inject } from 'mobx-react';
import styles from './common.css';
import { addFile } from '../actions/index';
const FormItem = Form.Item;

@inject('upload','uiState') @observer
class UploadFile extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }],
    };
  }

  componentDidMount(){

  }

  handleCancel = () => this.setState({ previewVisible: false })

  handleChange = ({ fileList }) => this.setState({ fileList })

  makeProps = () => {
    let thisProps = {
      action: 'uploadFile.action',
      name: 'file',
      onPreview(file){
        this.setState({
          previewImage: file.url || file.thumbUrl,
          previewVisible: true,
        });
      },
      beforeUpload(file){
        let isUpload = false;
        let isPic = false;
        switch (file.type) {
          case 'image/jpeg': isPic = true;
          case 'image/png': isPic = true;
        }
        if (!isPic) {
          message.error('请选择图片文件上传！');
        }else{
          isUpload = true;
          // this.setState({uploadFile: file});
        }
        return isUpload;
      },
    };
    return thisProps;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    addFile({a:1,b:2});
  }

  render() {
    console.log('render', this.props.upload);
    const { previewVisible, previewImage, fileList } = this.state;
    const { form:{getFieldDecorator,validateFields,getFieldsValue}} = this.props;

    let uploadProps = this.makeProps();

    const uploadButton = (
      <div>
        <Icon type='plus' />
        <div className='ant-upload-text'>Upload</div>
      </div>
    );

    return (
      <div className='clearfix' style={{padding: 50,width: 500}} >
        <div>width: {this.props.uiState.widthType}</div>
        name: {this.props.upload.name}
        <Form layout='horizontal' className='clearFix' onSubmit={this.handleSubmit} >
          <FormItem className={styles.item} label='名称' >
            {getFieldDecorator('name', {
              initialValue: null,
              rules: [
                { required: true, whitespace: true, message: '游戏名不能为空' },
              ],
            })(
              <Input placeholder='请输入名称' />
            )}
          </FormItem>
          <FormItem className={styles.item} label='文件' >
            {getFieldDecorator('image', {
            })(
              <Upload
                {...uploadProps}
                listType='picture-card'
                fileList={fileList}
              >
                {fileList.length >= 3 ? null : uploadButton}
              </Upload>
            )}
          </FormItem>
          <Button type='primary' size='large' htmlType='submit' style={{margin:0, width:'100%'}}>确定</Button>
        </Form>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt='example' style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

// let Test1 = () => <Test todoList={store} uiState={uiState} />
export default Form.create()(UploadFile);
