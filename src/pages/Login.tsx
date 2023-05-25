import { Button, Row, Space, Typography } from "antd"

import { fakeAuthProvider } from "../utils/auth"

const { Text } = Typography

export const Login = () => {
  return (
    <main>
      Login page
      <Row justify="center">
        <Button
          type="primary"
          onClick={() => {
            fakeAuthProvider.signin()
            console.log("fakeAuthProvider", fakeAuthProvider)
          }}
        >
          Log In
        </Button>
      </Row>
      <Space>
        <Text type="warning">
          You should log with other rights to get acces to page
        </Text>
      </Space>
    </main>
  )
}
