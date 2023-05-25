import { Form, Field } from "react-final-form"
import { Button, Row } from "antd"
import { InputAdapter } from "../InputAdapter"
import { Condition } from "../Condition"
import { required, validateOnString } from "../../utils/formValidators"


const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    )

export const UserForm = () => {
  const onSubmit = async (values: unknown) => {
    //just output json format user
    console.log("values", values)
    alert(JSON.stringify(values, 0, 2))
  }
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ taxIDExist: true }}
      render={({ handleSubmit }) => {
        return (
          //TODO: generate form from scheme on the fly
          <form onSubmit={handleSubmit}>
            <Row justify="start" style={{ width: "100vw" }}>
              <Field
                key="firstName"
                name="firstName"
                type="text"
                placeholder="provide first name"
                render={(props) => (
                  <InputAdapter
                    {...props}
                    label="First Name"
                    isRequired={true}
                    type="input"
                  />
                )}
                //validation example on required and on string
                validate={composeValidators(required, validateOnString)}
              />

              <Field
                key="lastName"
                name="lasttName"
                type="text"
                placeholder="provide last name"
                render={(props) => (
                  <InputAdapter
                    {...props}
                    label="Last Name"
                    isRequired={true}
                    type="input"
                  />
                )}
                validate={composeValidators(required, validateOnString)}
              />

              <Condition when="taxIDExist" is={true} key="taxIDExist">
                <Field
                  name="taxID"
                  type="text"
                  placeholder="provide tax id"
                  render={(props) => (
                    <InputAdapter
                      {...props}
                      label="TAX ID"
                      isRequired={false}
                    />
                  )}
                />
              </Condition>

              <Field
                name="taxIDExist"
                render={(props) => (
                  <InputAdapter {...props} isRequired={false} type="toggle" />
                )}
              />
            </Row>
            <Row justify="start" style={{ width: "100vw" }}>
              <Field
                key="birthDate"
                name="birthDate"
                //type="text"
                placeholder="provide birth date"
                render={(props) => (
                  <InputAdapter
                    {...props}
                    label="Birth Date"
                    isRequired={false}
                    type="date"
                  />
                )}
                // validate={composeValidators(required)}
              />
              <Field
                key="gernder"
                name="gernder"
                placeholder="provide gender"
                render={(props) => (
                  <InputAdapter
                    {...props}
                    label="Gender"
                    isRequired={false}
                    type="select"
                  />
                )}
                // validate={composeValidators(required)}
              />
            </Row>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </form>
        )
      }}
    ></Form>
  )
}
