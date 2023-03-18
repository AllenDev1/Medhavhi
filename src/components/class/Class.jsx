import React from "react";
import { Row, Col, Badge, Button } from "react-bootstrap";
import avtar from "../../assets/Avatar.svg";
import "./class.scss";
import time from "../../assets/hourglass-02.svg";
import ppt from "../../assets/ppt-icon-482 1.svg";
import download from "../../assets/download-02.svg";
import Grades from "./Grades";

const Class = () => {
	return (
		<>
			<div className="class p-3">
				<div className="top_section">
					<Row className="top_row">
						<Col className="top_col" md={1}>
							<img src={avtar} alt="" />
						</Col>
						<Col className="top_col2" >
							Lorem ipsum dolor sit amet consectetur. Scelerisque
							aenean nibh.
							<div className="lower_part">
								<div className="sub">
									<p>Submitted by:</p>
									{/* multipile image stack on each other */}
									<div className="img_stack">
										<img
											src="https://picsum.photos/200"
											alt=""
										/>
										<img
											src="https://picsum.photos/200"
											alt=""
										/>
										<img
											src="https://picsum.photos/200"
											alt=""
										/>
									</div>
								</div>
								<div className="assigned">
									<p className="mb-0">Assigned to: </p>{" "}
									<p className="date">14 Apr 2021, 8:43 PM</p>
								</div>
							</div>
						</Col>
						<Col className="badge-col" md={2}>
							<Badge bg="white" className="badge">
								<img src={time} alt="" />4 days
							</Badge>
						</Col>
					</Row>
					<Row className="text-row">
						<p>
							Lorem ipsum dolor sit amet consectetur. Pulvinar
							auctor sed proin at sem. Diam nisl in morbi id diam
							felis. Lectus eget sit tristique sit magnis pretium
							nec. Mus fermentum consequat nisl volutpat viverra
							ut at. Lorem tristique dolor cursus euismod mus
							duis. Etiam aliquam ultrices tristique in ipsum
							congue. Nisl aenean netus lobortis ut amet. Lacus
							eleifend urna turpis amet mattis lacus. Dui
							elementum ac vitae quam ullamcorper nunc.
						</p>
					</Row>
					<Button className="ppt_btn">
						<img src={ppt} alt="" />
						<span>
							<p>Evolution chapter notes.</p>
							<p>32.5 MB</p>
						</span>
						<img src={download} alt="" />
					</Button>
				</div>
				<Grades />
			</div>
		</>
	);
};

export default Class;
