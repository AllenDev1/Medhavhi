import React from "react";
import { Nav, Button } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import { NavLink, Link } from "react-router-dom";
import "./sidebar.scss";
import dashboard from "../../assets/dashboard.svg";
import classs from "../../assets/class.svg";
import setting from "../../assets/setting-3.svg";
import logout from "../../assets/logout.svg";
import forall from "../../assets/user-add.svg";

const Sidebar = () => {
	return (
		<Nav className="col-md-3 d-none d-md-block bg-white w-100 sidebar  px-2">
			<div className="sidebar_content">
				<div className="logo">
					<Link to="/" className="logo">
						<img src={logo} alt="logo " />
					</Link>
				</div>

				<div className="body_links">
					<NavLink
						to="/dashboard"
						className={({ isActive }) =>
							(isActive ? "active" : "") + " nav-link "
						}
					>
						<img src={dashboard} alt=" .dashboard" /> Dashboard
					</NavLink>
					<NavLink
						to="/class"
						className={({ isActive }) =>
							(isActive ? "active" : "") + " nav-link"
						}
					>
						<img src={classs} alt=".class" /> Class
					</NavLink>
					<NavLink
						to="/attendance"
						className={({ isActive }) =>
							(isActive ? "active" : "") + " nav-link "
						}
					>
						<img src={forall} alt=" .Attendance" /> Attendance
					</NavLink>
					<NavLink
						to="/Test"
						className={({ isActive }) =>
							(isActive ? "active" : "") + " nav-link"
						}
					>
						<img src={forall} alt=".Test" /> Test
					</NavLink>
					<NavLink
						to="/Reports"
						className={({ isActive }) =>
							(isActive ? "active" : "") + " nav-link "
						}
					>
						<img src={forall} alt=" .Reports" /> Reports
					</NavLink>
					<NavLink
						to="/Discipline"
						className={({ isActive }) =>
							(isActive ? "active" : "") + " nav-link"
						}
					>
						<img src={forall} alt=".Discipline" /> Discipline
					</NavLink>
					<NavLink
						to="/Doubts"
						className={({ isActive }) =>
							(isActive ? "active" : "") + " nav-link "
						}
					>
						<img src={forall} alt=" .Doubts" /> Doubts
					</NavLink>
					<NavLink
						to="/Messages"
						className={({ isActive }) =>
							(isActive ? "active" : "") + " nav-link"
						}
					>
						<img src={forall} alt=".Messages" /> Messages
					</NavLink>
					<NavLink
						to="/Schedule"
						className={({ isActive }) =>
							(isActive ? "active" : "") + " nav-link "
						}
					>
						<img src={forall} alt=" .Schedule" /> Schedule
					</NavLink>
					<NavLink
						to="/Notify"
						className={({ isActive }) =>
							(isActive ? "active" : "") + " nav-link"
						}
					>
						<img src={forall} alt=".Notify" /> Notify
					</NavLink>
				</div>
				<div className="setting_logout">
					<NavLink
						to="/setting"
						className={({ isActive }) =>
							(isActive ? "active" : "") + " nav-link"
						}
					>
						<img src={setting} alt=".setting" />
						Setting
					</NavLink>
					<Button  className="nav-link mb-4 bg-white border-0" >
						<img src={logout} alt=".logout" />
						Logout
					</Button>
				</div>
			</div>
		</Nav>
	);
};

export default Sidebar;
