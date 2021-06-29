import React, { useEffect ,useState} from "react";
import { useHistory } from "react-router-dom";
import RetroForm from "../../components/RetroForm";
import { LogoutOutlined } from "@ant-design/icons";
import "./admin.css";
import { Typography, Button , Row, Col} from "antd";
import RetroTable from "../../components/RetroTable";
import Header from "../../components/Header";

const Admin = () => {
  const [user, setUser] = useState({ user_id: null });
  const { user_id } = user;
    useEffect(() => {
    let u_id = JSON.parse(localStorage.getItem("retro")).user_id;
    setUser({user_id:u_id});
    console.log(user_id,"user id in admin screen")
  }, []);

  let history = useHistory();
  const handleLogOut = () => {
    history.push("/");
    localStorage.removeItem('retro');
  };
  return (
    <div className="admin-wrapper">
      <Header />
      <div>
        <Row>
          <Col span={8}></Col>
          <Col className="center" span={8}>
            <RetroForm user_id={user_id}/>
          </Col>
          <Col className="right-end" span={8}>
            <Button className="log-out" onClick={handleLogOut}>
              <Typography>Logout</Typography>
              <LogoutOutlined />
            </Button>
          </Col>
        </Row>
      </div>
      <div className="table-scroll">
      <RetroTable user_id={user_id}/>
      </div>
      
    </div>
  );
};

export default Admin;
