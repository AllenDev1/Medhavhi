import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./notgraded.scss";
import Submission from "./Submission";

const NotGraded = () => {
	const [showSubmissions, setShowSubmissions] = useState(false);
	return (
		<>
			<div className="not_graded">
				<div className="not_graded_content">
					{Array(5)
						.fill()
						.map((_, i) => (
							<div className="students_table mb-3" key={i}>
								<div className="students_img_data">
									<div className="not_graded_content_left">
										<div className="not_graded_content_left_img">
											<img
												src="https://picsum.photos/200"
												alt="not_graded"
											/>
										</div>
										<div className="not_graded_content_left_text">
											<p className="name">Assignment 1</p>
											<p className="date">
												October 25, 2019
											</p>
											<p className="when">On time</p>
										</div>
									</div>
								</div>
								<div className="grade_btn">
									<Button
										onClick={() =>
											setShowSubmissions(!showSubmissions)
										}
									>
										Grade
									</Button>
								</div>
							</div>
						))}
				</div>
			</div>
			<Submission
				show={showSubmissions}
				onHide={() => setShowSubmissions(false)}
			/>
		</>
	);
};

export default NotGraded;
