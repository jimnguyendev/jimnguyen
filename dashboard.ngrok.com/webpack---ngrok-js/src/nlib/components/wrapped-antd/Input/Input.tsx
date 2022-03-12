import * as React from 'react';
import { Input as AntdInput, Radio } from 'antd';
import type { InputProps as AntdInputProps } from 'antd/lib/input';
import cx from 'classnames';

import type { AutoComplete } from '../../../types/input';

import styles from './styles.less';

export interface InputProps extends Omit<AntdInputProps, 'autoComplete'> {
  monospaced?: boolean;
  autoComplete?: AutoComplete;
}

export const Input = React.forwardRef<AntdInput, InputProps>(
  ({ monospaced = false, className, ...props }, ref) => {
    const classNames = cx(monospaced && styles.monospaced, className);

    return <AntdInput {...props} className={classNames} ref={ref} />;
  }
);

type PasswordInputProps = Omit<InputProps, 'autoComplete'> & {
  autoComplete?: Extract<
    AutoComplete,
    'on' | 'off' | 'current-password' | 'new-password'
  >;
};

export const PasswordInput = React.forwardRef<AntdInput, PasswordInputProps>(
  ({ monospaced = false, className, ...props }, ref) => {
    const classNames = cx(monospaced && styles.monospaced, className);

    return <AntdInput.Password {...props} className={classNames} ref={ref} />;
  }
);

export const { Search } = AntdInput;

type RadioNumberInputProps = NumberInputProps & {
  defaultRadioChildren: React.ReactNode;
  inputPrefix?: React.ReactNode;
  inputPostfix?: React.ReactNode;
  fallbackValue?: string | number | readonly string[];
};

const parseInput = (input: string) => input.replace(/[^\w.-]+/g, '');

type NumberInputProps = Omit<InputProps, 'onChange'> & {
  onChange?: (newValue?: string | number | readonly string[]) => void;
};

export const NumberInput = React.forwardRef<AntdInput, NumberInputProps>(
  ({ min = 0, onChange, step = '1', value, ...props }, ref) => {
    const isIntegerStep = Number.isInteger(Number.parseFloat(`${step ?? 1}`));

    return (
      <Input
        {...props}
        value={Number.isNaN(value) ? undefined : value}
        ref={ref}
        min={min}
        step={step}
        type="number"
        onChange={event => {
          const newValue = parseInput(event.target.value);
          onChange?.(
            isIntegerStep
              ? Number.parseInt(newValue, 10)
              : Number.parseFloat(newValue)
          );
        }}
      />
    );
  }
);

export const RadiodNumberInput = ({
  value,
  onChange,
  defaultRadioChildren,
  inputPrefix,
  inputPostfix,
  className,
  fallbackValue,
  ...inputProps
}: RadioNumberInputProps) => {
  const [choice, setChoice] = React.useState(Boolean(value));

  return (
    <Radio.Group
      value={choice}
      onChange={event => {
        const newChoice = Boolean(event.target.value);
        setChoice(newChoice);
        onChange?.(newChoice ? value ?? fallbackValue : undefined);
      }}
    >
      <Radio value={false}>{defaultRadioChildren}</Radio>
      <Radio value>
        {inputPrefix}
        <NumberInput
          {...inputProps}
          className={cx(styles.compactInput, className)}
          value={value}
          onChange={onChange}
          onFocus={() => {
            setChoice(true);
            onChange?.(value ?? fallbackValue);
          }}
        />
        {inputPostfix}
      </Radio>
    </Radio.Group>
  );
};
