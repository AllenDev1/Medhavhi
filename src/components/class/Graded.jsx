import React from "react";
import Submission from "./Submission";
import { Button } from "react-bootstrap";
import { useState } from "react";
import "./graded.scss";

const Graded = () => {
	const [showSubmissions, setShowSubmissions] = useState(false);
	const [score, setScore] = useState(0);

	return (
		<>
			<div className="grades_content p-3 not_graded">
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
										onClick={() => {
											setShowSubmissions(
												!showSubmissions
											);
											setScore(10);
										}}
									>
										<p>Graded</p>
										<p className="score">10/10</p>
									</Button>
								</div>
							</div>
						))}
				</div>
			</div>
			<Submission
				show={showSubmissions}
				onHide={() => setShowSubmissions(false)}
				score={score}
			/>
		</>
	);
};

export default Graded;
