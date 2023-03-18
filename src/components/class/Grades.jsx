import React from "react";
import "./grades.scss";
import { Tabs, Tab, Button, Row, Col } from "react-bootstrap";
import NotGraded from "./NotGraded";
import Graded from "./Graded";

const Grades = () => {
	return (
		<>
			<div className="grades mt-3">
				<div className="grades_content p-3">
					<Tabs
						defaultActiveKey="Not-Graded"
						id="uncontrolled-tab-example"
						className="mb-5 grades_tabs" 
					>
						<Tab eventKey="Not-Graded" title="Not-Graded">
							<NotGraded />
						</Tab>
						<Tab eventKey="Graded" title="Graded">
							<Graded />
						</Tab>
					</Tabs>
				</div>
			</div>
		</>
	);
};

export default Grades;
