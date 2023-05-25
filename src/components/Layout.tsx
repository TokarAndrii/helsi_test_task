import { Outlet, Link } from "react-router-dom"
import { Row } from "antd"
import { Layout as AntLayout } from "antd"

const { Header, Content } = AntLayout

export const Layout = () => {
  return (
    <main>
      <AntLayout>
        <Header
          style={{
            textAlign: "center",
            color: "#fff",
            height: "10%",
            paddingInline: 50,
            lineHeight: "64px",
          }}
        >
          <Row style={{ width: "100vw" }}>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/user-create">User Create</Link>
                </li>
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
          </Row>
        </Header>
        <Content
          style={{
            textAlign: "center",
            minHeight: 120,
            lineHeight: "120px",
            height: "90vh",
          }}
        >
          <Outlet />
        </Content>
      </AntLayout>
    </main>
  )
}
