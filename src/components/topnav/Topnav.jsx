import React from "react";
import "./topnav.scss";
import leftarrwo from "../../assets/arrow-left.svg";
import notification from "../../assets/notifications.svg";
import { Button } from "react-bootstrap";

const TopNav = () => {
	return (
		<>
			<div className="topnav">
				<div className="topnav_content">
					<div className="topnav_content_left">
						<Button variant="white">
							<img src={leftarrwo} alt="leftarrow" />
						</Button>
						Assignments / Lorem ipsum dolor sit
					</div>
					<div className="topnav_content_right">
						<Button variant="white">
							<img src={notification} alt=".notification" />
						</Button>
						<div className="user-img">
							<img src="https://picsum.photos/200" alt=".user" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TopNav;
