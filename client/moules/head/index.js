import React from 'react';

import './style/head.less';

export default class AppHead extends React.Component{
  constructor(args){
    super(args);
  }

  render(){

    return(
    <div className="head">
      <div className="headName">
        <span>Meng</span>
      </div>
    </div>
    )
  }
}
