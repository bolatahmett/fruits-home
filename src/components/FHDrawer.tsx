import React from 'react'
import { Drawer, Row, Col, Divider } from 'antd'
import { connect } from 'react-redux';
import { openDrawer } from './../redux/actions/actions';
import { Typography } from 'antd';
const { Text } = Typography;
const pStyle = {
    fontSize: 16,
    lineHeight: '24px',
    display: 'block',
    marginBottom: 16,
};

// @ts-ignore
const DescriptionItem = ({ title, content }) => (
    <div
        className="site-description-item-profile-wrapper"
        style={{
            fontSize: 14,
            lineHeight: '22px',
            marginBottom: 7,
        }}
    >
        <p
            className="site-description-item-profile-p"
            style={{
                marginRight: 8,
                display: 'inline-block',
            }}
        >
            {title}:
    </p>
        {content}
    </div>
);

class FHDrawer extends React.Component<any, any> {


    state = { visible: false };

    componentWillReceiveProps(nextProps: any) {
        debugger;
        this.setState({
            visible: nextProps.drawerVisible,
        });

    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });

        this.props.openDrawer(false);
    };


    render() {
        return (
            <Drawer
                width={640}
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
            >
                <Row justify="center" align="middle" style={{ height: "40%" }}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ backgroundColor: "antiquewhite", backgroundImage: `url(${require("./../images/grapefruit.jpg")})`, backgroundSize: "cover", height: "-webkit-fill-available", backgroundRepeat: "no-repeat", backgroundPosition: "50% 50%" }}>
                    </Col>
                </Row>
                <Divider />

                <Text type={"danger"}> grapefruit</Text>

                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Position" content="Programmer" />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Responsibilities" content="Coding" />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Department" content="XTech" />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <DescriptionItem
                            title="Skills"
                            content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                        />
                    </Col>
                </Row>
                <Divider />
                <p className="site-description-item-profile-p" style={pStyle}>
                    Contacts
          </p>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Email" content="AntDesign@example.com" />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <DescriptionItem
                            title="Github"
                            content={
                                <a href="http://github.com/ant-design/ant-design/">
                                    github.com/ant-design/ant-design/
                  </a>
                            }
                        />
                    </Col>
                </Row>
            </Drawer>
        )
    }
}

const mapStateToProps = (state: any) => {
    debugger;
    const drawerVisible = state.drawer;
    return { drawerVisible };
};

export default connect(mapStateToProps, {

    openDrawer
})(FHDrawer);