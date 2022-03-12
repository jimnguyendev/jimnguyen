import * as React from 'react';
import type { FormProps } from 'antd';
import { Form as AntdForm } from 'antd';
import type { Rule } from 'antd/lib/form';
import type { FormInstance } from 'antd/lib/form/Form';
import type { FormItemProps } from 'antd/lib/form/FormItem';
import cx from 'classnames';

import { Button } from './Button/Button';

interface Props<Values> extends FormProps<Values> {
  children: React.ReactNode;
  removeHiddenSubmitButton?: boolean;
}

export const commonFormLayoutProps: FormProps = {
  layout: 'horizontal' as const,
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

export function Form<Values>({
  children,
  removeHiddenSubmitButton = false,
  ...rest
}: Props<Values>) {
  return (
    <AntdForm<Values>
      hideRequiredMark
      colon={false}
      scrollToFirstError
      {...rest}
    >
      {children}
      {removeHiddenSubmitButton === false && (
        <Form.Item noStyle>
          <Button className={cx('hidden')} htmlType="submit" />
        </Form.Item>
      )}
    </AntdForm>
  );
}

Form.useForm = AntdForm.useForm;
Form.Item = AntdForm.Item;
Form.List = AntdForm.List;
Form.ErrorList = AntdForm.ErrorList;
Form.Provider = AntdForm.Provider;

export type { FormInstance, FormItemProps, FormProps, Rule };
