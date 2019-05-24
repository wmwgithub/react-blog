import React from "react";
//似乎可以不用引入React antd 框架里面似乎已经引入了
import { Icon, Avatar, Popover, Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import "./index.less";
import { Cookies } from "react-cookie";
import { Search } from "../..";
const myCookie = new Cookies();
const articleTypeLists = [
  { type: "全部文章", count: 100 },
  { type: "第一类文章", count: 20 },
  { type: "第二类文章", count: 30 },
  { type: "第三类文章", count: 10 },
  { type: "第四类文章", count: 50 }
];
class TopNavBar extends React.Component {
  state = {
    drawerVisible: false,
    lickClickId: 0,
    drawerWidth: "100%",
    showSearch: false
  };
  componentWillUnmount() {
    this.setState({
      showSearch: false
    });
  }
  showSearch = () => {
    this.setState({
      showSearch: !this.state.showSearch
    });
  };
  handleType = type => {
    console.log(type);
  };
  showDrawer = () => {
    // console.log(window.screen.availWidth,window.screen.width)
    if (window.screen.width > 960) {
      this.setState({
        drawerWidth: "50%",
        drawerVisible: !this.state.drawerVisible
      });
      return 0;
    }
    this.setState({
      drawerWidth: "100%",
      drawerVisible: !this.state.drawerVisible
    });
  };
  handleLinkCilck = linkIndex => {
    this.setState({
      lickClickId: linkIndex,
      drawerVisible: false
    });
  };
  handleLogout = () => {
    let cookie = myCookie.getAll();
    Object.keys(cookie).map(value => myCookie.remove(value));
  };
  render() {
    const avatarContent = (
      <div>
        <Button>
          <Icon type="setting" />
          资料设置
        </Button>
        <br />
        <Button onClick={this.handleLogout}>
          <Link to="/login">
            <Icon type="logout" />
            退出登录
          </Link>
        </Button>
      </div>
    );
    return this.state.showSearch ? (
      /**@close 把父组件控制子组件的状态的函数直接传给子组件 然后就能通过子组件调用父组件内部的函数
       * */ 
      <Search visiable={this.state.showSearch} close={this.showSearch}/>
    ) : (
      <div className="navColor">
        <Icon type="bars" className="IconSize" onClick={this.showDrawer} />
        <Drawer
          title="文章类型"
          placement="left"
          visible={this.state.drawerVisible}
          onClose={this.showDrawer}
          width={this.state.drawerWidth}
        >
          <ul className="articleTypeList">
            {articleTypeLists.map((value, index) => (
              <li
                key={index}
                className={this.state.lickClickId === index ? "select" : ""}
                onClick={() => {
                  this.handleLinkCilck(index);
                }}
              >
                <Link to={"/main/type" + index}>{value.type}</Link>
                <span>{value.count}</span>
              </li>
            ))}
          </ul>
        </Drawer>
        <div>
          <Icon type="search" className="IconColor" onClick={this.showSearch} />
          <Popover placement="bottom" content={avatarContent} trigger="click">
            <Avatar src={this.props.avatar} className="AvatarStyle" />
          </Popover>
        </div>
      </div>
    );
  }
}
export default TopNavBar;
