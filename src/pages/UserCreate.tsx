import { Typography } from "antd"
import { UserForm } from "../components/form/UserForm"

const { Title } = Typography

export const UserCreate = () => {
  return (
    <main style={{padding: "1rem"}}>
      <Title level={5}>Create person</Title>
      <UserForm />
    </main>
  )
}
