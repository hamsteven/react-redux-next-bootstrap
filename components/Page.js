import Link from 'next/link'
import { connect } from 'react-redux'
import Clock from './Clock'
import AddCount from './AddCount'
// import { Button } from 'react-bootstrap'
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Form from 'react-bootstrap/lib/Form';
import Head from 'next/head';






// TODO: NEXT, on the second page make a div with an input amd figure out where the number is being stored and store it there.







export default connect(state => state)(({ title, linkTo, lastUpdate, light }) => {
  return (
    <div>
      <Head>
        <title>Simply Social</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cosmo/bootstrap.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/static/custom.css" />
      </Head>

      <Nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand">Navbar</a>
        <Form className="form-inline pull-right">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</Button>
        </Form>
      </Nav>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
        <nav>
          <Link href={linkTo}><a>Navigate</a></Link>
        </nav>      
        {/* <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
          <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
          <NavItem eventKey="2" title="Item">NavItem 2 content</NavItem>
          <NavItem eventKey="3" disabled>NavItem 3 content</NavItem>
          <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
            <MenuItem eventKey="4.1">Action</MenuItem>
            <MenuItem eventKey="4.2">Another action</MenuItem>
            <MenuItem eventKey="4.3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4.4">Separated link</MenuItem>
          </NavDropdown>
        </Nav> */}
      {/* <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}> */}
      <Nav bsStyle="tabs" activeKey="1">
          <NavItem eventKey="1" href="/other">ALL POSTS</NavItem>
          <NavItem eventKey="2" title="Item" href="/">PHOTOS</NavItem>
          <NavItem eventKey="3" title="NextItem">VIDEOS</NavItem>
      </Nav>
      </Jumbotron>

      <div>
        <h1>{title}</h1>
        <Clock lastUpdate={lastUpdate} light={light} />
        <Button>Default</Button>
        <AddCount />

      </div>
    </div>
  )
})
