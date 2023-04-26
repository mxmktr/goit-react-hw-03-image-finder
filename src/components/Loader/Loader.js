import React from 'react';
import { Vortex } from 'react-loader-spinner';

export function Loader() {
  return (
    <div className="loader" style={{ margin: '0px auto' }}>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{ marginLeft: '47%' }}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>
  );
}
