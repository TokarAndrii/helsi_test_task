import { Form as AntForm, Input, Switch, Select, DatePicker } from "antd"
import styles from "./InputAdapter.module.css"

export const InputAdapter = ({
  label,
  input,
  meta,
  isRequired,
  type,
  ...rest
}: {
  label: string
  isRequired: boolean
  type: string
  input: { value: boolean | undefined; onChange: () => void }
  meta: { touched: boolean | undefined; error: string }
}) => {
  switch (type) {
    case "toggle":
      return (
        <AntForm.Item valuePropName="taxIDExist">
          <Switch
            defaultChecked
            checked={input.value}
            onChange={input.onChange}
          />
        </AntForm.Item>
      )
    case "date":
      return (
        <AntForm.Item label={label} required={isRequired}>
          <DatePicker
            value={input.value}
            onChange={input.onChange}
            {...rest}
            style={{ width: "185px", marginRight: "24px" }}
          />
        </AntForm.Item>
      )

    case "select":
      return (
        <AntForm.Item label={label} required={isRequired}>
          <Select
            defaultValue="Male"
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Feale" },
            ]}
          />
        </AntForm.Item>
      )

    default:
      return (
        <AntForm.Item label={label} required={isRequired}>
          <Input
            {...rest}
            style={{ position: "relative" }}
            value={input.value}
            onChange={input.onChange}
            allowClear
            bordered={false}
          />
          {isRequired && meta.touched && meta.error && (
            <span className={styles.error}>{meta.error}</span>
          )}
        </AntForm.Item>
      )
  }
}
