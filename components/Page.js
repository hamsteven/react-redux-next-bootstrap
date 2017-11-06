import Link from 'next/link'
import { connect } from 'react-redux'
import Clock from './Clock'
import AddCount from './AddCount'
// import { Button } from 'react-bootstrap'
import Button                 from 'react-bootstrap/lib/Button';
import Jumbotron              from 'react-bootstrap/lib/Jumbotron';
import Nav              from 'react-bootstrap/lib/Nav';
import Form              from 'react-bootstrap/lib/Form';
// import Layout                 from '../components/Layout';
import Head from 'next/head';

// const buttonsInstance = (
//   <ButtonToolbar>
//     {/* Standard button */}
//     <Button>Default</Button>

//     {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
//     <Button bsStyle="primary">Primary</Button>

//     {/* Indicates a successful or positive action */}
//     <Button bsStyle="success">Success</Button>

//     {/* Contextual button for informational alert messages */}
//     <Button bsStyle="info">Info</Button>

//     {/* Indicates caution should be taken with this action */}
//     <Button bsStyle="warning">Warning</Button>

//     {/* Indicates a dangerous or potentially negative action */}
//     <Button bsStyle="danger">Danger</Button>

//     {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
//     <Button bsStyle="link">Link</Button>
//   </ButtonToolbar>
// );

// const jumbotronInstance = (
//   <Jumbotron>
//     <h1>Hello, world!</h1>
//     <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
//     <p><Button bsStyle="primary">Learn more</Button></p>
//   </Jumbotron>
// );
 
// ReactDOM.render(jumbotronInstance, mountNode);

// ReactDOM.render(buttonsInstance, mountNode);
export default connect(state => state)(({ title, linkTo, lastUpdate, light }) => {
  return (
    <div>
      <Head>
        <title>Simply Social</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cosmo/bootstrap.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/static/custom.css" />
      </Head>

      <Nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">Navbar</a>
        <Form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</Button>
        </Form>
      </Nav>

      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
      </Jumbotron>

      <div>
        <h1>{title}</h1>
        <Clock lastUpdate={lastUpdate} light={light} />
        <Button>Default</Button>
        <AddCount />
        <nav>
          <Link href={linkTo}><a>Navigate</a></Link>
        </nav>
      </div>
    </div>
  )
})



{/* <Layout>

      <Nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">Navbar</a>
        <Form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</Button>
        </Form>
      </Nav>

      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
      </Jumbotron>

      <div>
        <h1>{title}</h1>
        <Clock lastUpdate={lastUpdate} light={light} />
        <Button>Default</Button>
        <AddCount />
        <nav>
          <Link href={linkTo}><a>Navigate</a></Link>
        </nav>
      </div>


    </Layout> */}