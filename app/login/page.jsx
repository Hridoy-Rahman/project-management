'use client'
import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';

const LoginPage = () => {
  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    // Mock authentication response - replace with actual logic
    if (values.username === 'admin' && values.password === 'password') {
      message.success('Login successful');
    } else {
      message.error('Invalid username or password');
    }
  };

  return (
    <div style={{ width: '300px', margin: 'auto', marginTop: '100px' }}>
      <Form
        form={form}
        name="login-form"
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please enter your username' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
