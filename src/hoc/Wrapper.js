import React from 'react';

const Wrapper = (WrappedComponent) => {
  return props => (
    <div className="container">
      <div className='row'>
        <div className='col-md-6 pt-4'>
          <WrappedComponent {...props} />
        </div>
      </div>
    </div>
  )
}

export default Wrapper;
