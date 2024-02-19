import React from "react";
import { AuthContext } from "../../../AppProvider";
import {
  Calendar,
  Col,
  Divider,
  Progress,
  Rate,
  Row,
  Statistic,
  Steps,
  theme,
} from "antd";
import Offer from "./Offer";
import { LikeOutlined } from "@ant-design/icons";

const description = "This is a description.";

function Home() {
  const { user, setUser, token, setToken, isLogin, setIsLogin } =
    React.useContext(AuthContext);
  // const navigate =
  if (!token) {
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <Offer />
          <Divider />

          <div className="row ">
            <div className="col-md-8">
              <div
                className="card p-3  d-flex justify-content-center align-items-center "
                style={{ height: "200px" }}
              >
                <div className="w-100">
                  <Row gutter={16}>
                    <Col span={12} className="d-flex justify-content-center">
                      <Statistic
                        title="Feedback"
                        value={1128}
                        prefix={<LikeOutlined />}
                      />
                    </Col>
                    <Col span={12} className="d-flex justify-content-center">
                      <Statistic title="Unmerged" value={93} suffix="/ 100" />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card p-3 d-flex justify-content-center align-items-center"
                style={{ height: "200px" }}
              >
                <Progress type="circle" percent={80} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <div className="d-flex gap-3">
              <h5>Ratings:</h5>
              <Rate allowHalf defaultValue={4.5} />
            </div>
            <Divider />
            <Calendar fullscreen={false} />
            <Divider />
            <Steps
              direction="vertical"
              size="large"
              current={1}
              items={[
                {
                  title: "Finished",
                  description,
                },
                {
                  title: "In Progress",
                  description,
                },
                {
                  title: "Waiting",
                  description,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
