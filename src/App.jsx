import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import Topnav from "./components/topnav/Topnav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Class from "./components/class/Class";

function App() {
	return (
		<>
			<Container fluid>
				<Router>
					<Row className="">
						<Col md={2} className="p-0 sidebar-col">
							<Sidebar />
						</Col>
						<Col md={10} className="p-0 content_col">
							<Topnav />
							<Routes>
								<Route path="/class" element={<Class />} />
							</Routes>
						</Col>
					</Row>
				</Router>
			</Container>
		</>
	);
}

export default App;
