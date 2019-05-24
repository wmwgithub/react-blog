import React from "react";
import { Button, Icon } from "antd";
import { Link } from "react-router-dom";
export default () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Link to="/manage/acticle">
        <Button size="small">
          <Icon type="tool" />
          管理文章
        </Button>
      </Link>
    </div>
  );
};
