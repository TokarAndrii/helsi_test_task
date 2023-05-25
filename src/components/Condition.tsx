import { Field } from "react-final-form"

export const Condition = ({
  when,
  is,
  children,
}: {
  when: string
  is: unknown
  children: unknown
}) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)
