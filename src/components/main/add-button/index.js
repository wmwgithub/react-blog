import React from "react";
import { Button, Affix } from "antd";
import { Link } from "react-router-dom";
export default () => {
  return (
    <Affix offsetBottom={20} style={{float:"right",marginRight:20}}>
      <Link to="/write">
        <Button type="primary" shape="round" icon="plus"  />
      </Link>
    </Affix>
  );
};
