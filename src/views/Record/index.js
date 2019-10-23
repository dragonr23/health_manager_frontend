import React, { Component } from 'react';
import './index.css';
import VerticalSlider from '../../components/VerticalSlider';





class Record extends Component {

  handleRecord = async() => {

    alert('called')
    let user_id = localStorage.getItem('id')
    let sleep = localStorage.getItem('sleep')
    let nutrition = localStorage.getItem('nutrition')
    let hydration = localStorage.getItem('hydration')
    let family = localStorage.getItem('family')
    let friends = localStorage.getItem('friends')
    let intimate = localStorage.getItem('intimate')
    let vigorous = localStorage.getItem('vigorous')
    let movement = localStorage.getItem('movement')
    let standing = localStorage.getItem('standing')
    let needed_work = localStorage.getItem('work')
    let creative_work = localStorage.getItem('creative')
    let relaxed_state= localStorage.getItem('meditation')
    let substance_abuse = localStorage.getItem('substance')
    let unhealthy_relationships = localStorage.getItem('unhealthy')
    let self_harm = localStorage.getItem('self-harm')
    let mental_clarity = localStorage.getItem('mental')


    let attributes = [user_id,
                      sleep,
                      nutrition,
                      hydration,
                      family,
                      friends,
                      intimate,
                      vigorous,
                      movement,
                      standing,
                      needed_work,
                      creative_work,
                      relaxed_state,
                      substance_abuse,
                      unhealthy_relationships,
                      self_harm,
                      mental_clarity]

    console.log("NEEDED WORK ", needed_work)


    // for (let a of attributes) {
    //   console.log(a)
    //   if (a == null) {
    //     let a = 5
    //   }
    // }

    const URL = 'http://localhost:5000/api/saverecord';


    let response = await fetch(URL, {
      "method": "POST",
      "headers": {
      'Content-Type': "application/json",
      "user_id":user_id,
      "sleep": sleep,
      "nutrition": nutrition,
      "hydration": hydration,
      "family": family,
      "friends": friends,
      "intimate":intimate,
      "vigorous": vigorous,
      "movement": movement,
      "standing": standing,
      "needed_work": needed_work,
      "creative_work": creative_work,
      "relaxed_state": relaxed_state,
      "substance_abuse": substance_abuse,
      "unhealthy_relationships": unhealthy_relationships,
      "self_harm": self_harm,
      "mental_clarity": mental_clarity
    }

    });

    let data = await response.json()

    if (data.success) {
      alert(`${data.success}`);
    } else if (data.error) {
      alert(`${data.error}`);
    } else {
         alert('Try again sorry!')
       }

     }



  render() {
    return (
      <div>
        <h1>Save Day</h1>
        <div className="row">
          <div className="col-md-4 offset-md-4">

            <VerticalSlider />
            <form onSubmit={this.handleRecord}>


              <input type="submit" className="btn btn-primary" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Record;
