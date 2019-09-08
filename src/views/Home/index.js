import React, { Component } from 'react';
import './index.css';

class Home extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h1>TAO</h1>
            <div clasName="row">
              <img src='http://placehold.it/1000x250/' title='main' className='frontimgs roundy'/>
            </div>
            <div className="row">

              <div className='col-md-8'>
                <img src='http://placehold.it/500x250/' title='2ndrowimg' className='secondrow roundy'/>
              </div>
              <div className='col-md-4'>
                <p className='secondrow roundy pcolor'> THERE WILL BE GRAPHS AND EXPLANATIONS</p>
              </div>
            </div>

            <div className="row">

                <div className="col-md-4">
                  <img src='http://placehold.it/300x300/' title='2ndrowimg' className='secondrow roundy'/>
                </div>
                <div className="col-md-4">
                  <img src='http://placehold.it/300x300/' title='2ndrowimg' className='secondrow roundy'/>
                </div>
                <div className="col-md-4">
                  <img src='http://placehold.it/300x300/' title='2ndrowimg' className='secondrow roundy'/>
                </div>
            </div>


            </div>
          </div>
      </div>
    );
  }
}

export default Home;
