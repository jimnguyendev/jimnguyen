import * as React from 'react';
import { Form } from 'antd';

import { PasswordInput } from 'nlib/components/wrapped-antd';

import { GenericForm } from 'components/Table/GenericForm';

interface IProps {
  token: string;
  changePassword: (password: string, token: string) => Promise<void>;
}

interface FormValues {
  password: string;
}

const fieldName = (name: keyof FormValues): string => name;

export const PasswordChangeForm = ({ token, changePassword }: IProps) => (
  <GenericForm<FormValues>
    layout="vertical"
    submitText="Change Password"
    handleSubmit={({ password }) => changePassword(password, token)}
  >
    <Form.Item
      name={fieldName('password')}
      label="New Password"
      rules={[{ required: true, message: 'Please enter a new password' }]}
    >
      <PasswordInput autoComplete="new-password" />
    </Form.Item>
  </GenericForm>
);
