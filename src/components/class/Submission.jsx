import React from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import ppt from "../../assets/ppt-icon-482 1.svg";
import download from "../../assets/download-02.svg";
import "./submission.scss";
import { Link } from "react-router-dom";

const Submission = (props) => {
	return (
		<>
			<Modal
				{...props}
				size="xl"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				className="submission_modal"
			>
				<Modal.Header closeButton className="submission_header">
					<Modal.Title
						id="contained-modal-title-vcenter"
						className="submission_title"
					>
						Student submission
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="submission_body">
					<Row>
						<Col>
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
										<p className="date">October 25, 2019</p>
										<p className="when">On time</p>
									</div>
								</div>
							</div>
						</Col>
					</Row>
					<p className="subed_text">Submitted files</p>
					<div className="btns_download">
						<Button className="ppt_btn">
							<img src={ppt} alt="" />
							<span>
								<p>Evolution of human being.</p>
								<p>32.5 MB</p>
							</span>
							<img src={download} alt="" />
						</Button>

						<Button className="ppt_btn">
							<img src={ppt} alt="" />
							<span>
								<p>Evolution exercise 1.</p>
								<p>32.5 MB</p>
							</span>
							<img src={download} alt="" />
						</Button>
					</div>
					<p className="subed_text">Student comment</p>
					<p className="commenst_std">
						Lorem ipsum dolor sit amet consectetur. Pulvinar auctor
						sed proin at sem. Diam nisl in morbi id diam felis.
						Lectus eget sit tristique sit magnis pretium nec. Mus
						fermentum consequat nisl volutpat viverra ut at. Lorem
						tristique dolor cursus euismod mus duis. Etiam aliquam
						ultrices tristique in ipsum congue. Nisl aenean netus
						lobortis ut amet. Lacus eleifend urna turpis amet mattis
						lacus. Dui elementum ac vitae quam ullamcorper nunc.
					</p>
					<p className="subed_text">Grade obtained:</p>
					<div className="grade_obtained">
						<input
							type="text"
							placeholder={
								props.score ? props.score : "Enter grade here"
							}
						/>
						<Button>out of 10</Button>
					</div>
					<Row>
						<Form>
							<Form.Group
								className="my-3 comment_box"
								controlId="exampleForm.ControlTextarea1"
							>
								<Form.Control
									as="textarea"
									rows={3}
									placeholder="Enter your suggestion or comment here."
								/>
							</Form.Group>
						</Form>
					</Row>
				</Modal.Body>
				<Modal.Footer className="submission_footer">
					<Link className="resubmission">Ask for resubmission</Link>
					<Button>{props.score ? "Edit Grade" : "Grade"}</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Submission;
