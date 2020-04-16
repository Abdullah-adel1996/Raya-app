import React from 'react';
import {Dropdown, DropdownButton, ButtonGroup} from 'react-bootstrap';

const DrobDown = props => {
    return (
        <div>
            <>
  {['Brand', 'City', 'Area'].map(
    (field) => (
      <>
        <DropdownButton
          as={ButtonGroup}
          key={field}
          variant={"outline-dark"}
          title={field}
          style={{width:'7rem'}}
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Active Item
          </Dropdown.Item>
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>{' '}
      </>
    ),
  )}
</>
        </div>
    )
}


export default DrobDown
