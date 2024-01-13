import React, { Children, useState, useEffect, useCallback } from "react";
import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faCircleUser, faUserGroup, faDoorOpen, faCommentDots, faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import './Main.scss'
import { Link } from 'react-router-dom';

import UserModal from '../components/Modal/UserModal';
import FrameLeftIcon from "../components/container/FrameLeftIcon";
import FrameLeftChat from "../components/container/FrameLeftChat";
import PathT from "../components/Nav/PathT";
// import PathT from "../components/Nav/PathT";



const { Header, Content, Footer, Sider } = Layout;
const items = [
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	UserOutlined,
].map((icon, index) => ({
	key: String(index + 1),
	icon: React.createElement(icon),
	label: `nav ${index + 1}`,
}));

const Main = ({ children }) => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	const [isClick, setIsClick] = useState('');
	const [icon, setIcon] = useState('icon');
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenUserodal, setIsOpenUserodal] = useState(false);


	const handleOpenTab = (openTab) => {
		setIcon('iconActive')
		setIsClick(openTab)
	}

	const handleOpenDoor = () => {

		setIsOpen(!isOpen)
	}
	const openUserModal = () => {
		setIsOpenUserodal(!isOpenUserodal)
	}



	return (
		// <Layout>
		// 	<Sider
		// 		breakpoint="lg"
		// 		collapsedWidth="0"
		// 		onBreakpoint={(broken) => {
		// 			console.log(broken);
		// 		}}
		// 		onCollapse={(collapsed, type) => {
		// 			console.log(collapsed, type);
		// 		}}
		// 	>
		// 		<div className="demo-logo-vertical" />
		// 		<Menu
		// 			theme="dark"
		// 			mode="inline"
		// 			defaultSelectedKeys={["4"]}
		// 			items={items}
		// 		/>
		// 	</Sider>
		// 	<Layout>
		// 		<Header
		// 			style={{
		// 				padding: 0,
		// 				background: colorBgContainer,
		// 			}}
		// 		/>
		// 		<Content
		// 			style={{
		// 				margin: "24px 16px 0",
		// 			}}
		// 		>
		// 			<div
		// 				style={{
		// 					padding: 24,
		// 					minHeight: 360,
		// 					background: colorBgContainer,
		// 					borderRadius: borderRadiusLG,
		// 				}}
		// 			>
		// 				{children}
		// 			</div>
		// 		</Content>
		// 		<Footer
		// 			style={{
		// 				textAlign: "center",
		// 			}}
		// 		>
		// 			Ant Design ©{new Date().getFullYear()} Created by Ant UED
		// 		</Footer>
		// 	</Layout>
		// </Layout>
		<>
			<div className='mainContainer' >
				<div className='frameLeftIcon'>
					<FrameLeftIcon />
				</div>
				<div className='frameLeftChat'>
					{/* <FrameLeftChat /> */}
				</div>
				<div className='frameMiddleAndRight'>
					{/* <PathT /> */}

				</div>


			</div>
		</>
	);
};
export default Main;
