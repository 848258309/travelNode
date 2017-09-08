import React, { PropTypes } from 'react';
import { Form, Input, Button, Icon, Radio, Popconfirm } from 'antd';
import styles from './LoginForm.less';
const RadioGroup = Radio.Group;
const FormItem = Form.Item;

// 采用 stateless 的写法
const LoginForm = ({
    loading,
  onLogin,
  form: {
      getFieldDecorator,
    validateFields,
    getFieldsValue
    },
}) => {

  function handleSubmit(e) {
    e.preventDefault();
    validateFields((errors) => {
      if (!!errors) {
        return;
      }
      localStorage.setItem('loginName', getFieldsValue().loginName);
      onLogin(getFieldsValue());
    });
  }

  return (
    <div className={styles.normal}>
      <Form layout='horizontal' onSubmit={handleSubmit}>
        <FormItem label='用户名' >
          {getFieldDecorator('loginName', {
            initialValue: localStorage.getItem('loginName'),
            rules: [
              { required: true, whitespace: true, message: '请输入用户名' },
            ],
          })(
            <Input prefix={<Icon type="user" />} placeholder='请输入用户名' className={styles.input} />
            )}
        </FormItem>
        <FormItem label='密码' >
          {getFieldDecorator('password', {
            rules: [
              { required: true, whitespace: true, message: '请输入密码' },
            ],
          })(
            <Input prefix={<Icon type="lock" />} type='password' placeholder='请输入密码' className={styles.input} />
            )}
        </FormItem>
        {/* <FormItem >
          {getFieldDecorator('language', {
            initialValue: 0,
          })(
            <RadioGroup >
              <Radio value={0}>国内</Radio>
              <Radio value={1}>国外</Radio>
            </RadioGroup>
          )}
        </FormItem> */}
        <Button type="primary" htmlType="submit" loading={loading} className={styles.button} >登录</Button>
      </Form>
    </div>
  );
}

export default Form.create()(LoginForm);
