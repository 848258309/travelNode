import React from 'react';
import { Icon, Modal, Input, message } from 'antd';
// import { observable, computed, useStrict, action, autorun } from 'mobx';
import { observer, inject } from 'mobx-react';
import styles from './common.css';
import UploadFileItem from '../components/upload/UploadFile';
import { addFile } from '../actions/index';

@inject('upload','uiState') @observer
class UploadFile extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      previewVisible: false,
      previewImage: '',
    };
  }

  componentDidMount(){

  }

  handleCancel = () => this.setState({ previewVisible: false })

  handleChange = ({ fileList }) => this.setState({ fileList })

  render() {
    console.log('render upload');
    const { previewVisible, previewImage, fileList } = this.state;
    const { upload, uiState } = this.props;

    const uploadProps = {
      upload,
      addFile,
    }

    return (
      <div className='clearfix' style={{padding: 50,width: 500}} >
        <div>width: {uiState.widthType}</div>
        <UploadFileItem {...uploadProps}/>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt='example' style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

// let Test1 = () => <Test todoList={store} uiState={uiState} />
export default UploadFile;
