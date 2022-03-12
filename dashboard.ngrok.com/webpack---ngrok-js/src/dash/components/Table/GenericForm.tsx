import * as React from 'react';
import { Popconfirm } from 'antd';
import type { PopconfirmProps } from 'antd/lib/popconfirm';

import { useMessage } from 'nlib/components/MessageContext';
import type { ButtonProps } from 'nlib/components/wrapped-antd/Button/Button';
import { Button } from 'nlib/components/wrapped-antd/Button/Button';
import type {
  FormInstance,
  FormItemProps,
  FormProps,
} from 'nlib/components/wrapped-antd/Form';
import { Form } from 'nlib/components/wrapped-antd/Form';
import { Paragraph } from 'nlib/components/wrapped-antd/Paragraph';

export type ICreateHandler<FormData, CreatedObj = unknown> = (
  formData: FormData
) => Promise<CreatedObj>;

type SuccessMsg<FormData, CreatedObj> = {
  response: CreatedObj;
  formData: FormData;
};
type GenerateMessageFunc<FormData, CreatedObj> = (
  params: SuccessMsg<FormData, CreatedObj>
) => string;

interface GenericFormProps<FormData, CreatedObj = unknown>
  extends Omit<FormProps, 'form' | 'onFinish'> {
  children?: React.ReactNode;
  handleSubmit: ICreateHandler<FormData, CreatedObj>;
  submitText: React.ReactNode;
  helperText?: React.ReactNode;
  successMsg?: string | GenerateMessageFunc<FormData, CreatedObj>;
  disabled?: boolean;
  submitButtonProps?: ButtonProps;
  submitButtonFormItemProps?: FormItemProps;
  preventReset?: boolean;
  popConfirmProps?: Partial<PopconfirmProps>;
  form?: FormInstance<FormData>;
}

export const GenericForm = <FormData, CreatedObj = unknown>({
  children,
  handleSubmit,
  submitText,
  helperText,
  successMsg,
  disabled,
  submitButtonProps,
  submitButtonFormItemProps,
  preventReset,
  popConfirmProps,
  ...restProps
}: GenericFormProps<FormData, CreatedObj>) => {
  const [form] = Form.useForm<FormData>(restProps.form);
  const [, forceUpdate] = React.useState<unknown>();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const messageContext = useMessage();

  React.useEffect(() => {
    // Validates form in the beginning to disable submit button (if needed)
    forceUpdate({});
  }, []);

  const setSuccessMessage = ({
    response,
    formData,
  }: SuccessMsg<FormData, CreatedObj>) => {
    const message =
      typeof successMsg === 'function'
        ? successMsg({ response, formData })
        : successMsg;

    if (message !== undefined) {
      messageContext.setSuccess(message);
    }
  };

  const onFinish = async (formData: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await handleSubmit(formData);
      setSuccessMessage({ response, formData });
      if (!preventReset) {
        form.resetFields();
      }
    } catch (error) {
      messageContext.setErrorGeneric({ error });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Form<FormData> form={form} onFinish={onFinish} {...restProps}>
        {children}
        <Form.Item shouldUpdate {...submitButtonFormItemProps}>
          {() =>
            popConfirmProps ? (
              <Popconfirm
                title="Are you sure?"
                onConfirm={form.submit}
                onCancel={() => {}}
                {...popConfirmProps}
              >
                <Button
                  disabled={disabled}
                  loading={isSubmitting}
                  type="primary"
                  htmlType="submit"
                  {...submitButtonProps}
                >
                  {submitText}
                </Button>
              </Popconfirm>
            ) : (
              <Button
                disabled={disabled}
                loading={isSubmitting}
                type="primary"
                htmlType="submit"
                {...submitButtonProps}
              >
                {submitText}
              </Button>
            )
          }
        </Form.Item>
      </Form>
      {helperText && <Paragraph type="secondary">{helperText}</Paragraph>}
    </>
  );
};
