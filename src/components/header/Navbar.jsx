import { useState } from 'react';
import { Tabs, Tab, Accordion, Nav } from 'react-bootstrap';


export const MenuMain = function () {
    return (
        <div className="menu-list-body">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Home</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">Active</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">Active</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Accordion Item #3</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">Active</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Accordion Item #4</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">Active</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Accordion Item #5</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">Active</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export const AllCategories = function () {
    return (
        <div className="menu-list-body">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Home</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">Active</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">Active</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Accordion Item #3</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">Active</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Accordion Item #4</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">Active</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Accordion Item #5</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">Active</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="header-navbar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-2 col-lg-1">
                        <button onClick={() => setIsOpen(!isOpen)} className="primary-menu-btn">
                            <i className="fad fa-bars"></i>
                        </button>
                        <div className={`primary-menu-list ${isOpen ? "active" : ""}`}>
                            <div className="menu-list-top">
                                <Tabs
                                    defaultActiveKey="profile"
                                    id="uncontrolled-tab-example"
                                    className="border-0"
                                >
                                    <Tab
                                        className='tab-btn'
                                        eventKey="home"
                                        title="Main menu"
                                    >
                                        <MenuMain />
                                    </Tab>
                                    <Tab
                                        className='tab-btn border-0'
                                        eventKey="profile"
                                        title="All Categories">
                                        <AllCategories />
                                    </Tab>
                                </Tabs>
                                <i
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="far fa-times menu-close"
                                ></i>
                            </div>
                            <div className="menu-list-bottom">
                                <p>
                                    <a href="#" className="lang">UZB</a>
                                    <a href="#" className="lang">RU</a>
                                    <a href="#" className="lang">ENG</a>
                                </p>
                            </div>
                        </div>
                        <div className={`project-overlay ${isOpen ? "active" : ""}`}>
                        </div>
                    </div>
                    <div className="col-7 col-lg-2 text-center">
                        <a href="index.html" className="logo">
                            <img src="images/logo.svg" alt="" />
                        </a>
                    </div>
                    <div className="col-5 d-none d-lg-block text-center">
                        <div className="search-parent">
                            <input type="text" className="search-input" placeholder="Search products..." />
                            <button className="search-btn">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-3 col-lg-4">
                        <div className="navbar-btn-group">
                            <div className="profil-btn d-none d-lg-flex">
                                <button className="my-btn">
                                    <i className="fal fa-user"></i>
                                </button>
                                <p>
                                    <span>Salom <b>Mirjalol</b>!</span>
                                    <a href="#">Kirish</a> / <a href="#">Ro'yhatdan o'tish</a>
                                </p>
                            </div>
                            <button className="my-btn favorite d-none d-lg-block">
                                <i className="fal fa-heart"></i>
                                <span className="my-badge">24</span>
                            </button>
                            <button className="my-btn backet">
                                <i className="fal fa-shopping-basket"></i>
                                <span className="my-badge">0</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;