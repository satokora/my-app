import React, {Component} from 'react';
import './Content.css';
import Language from './Language';

class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
          username: 'satokora',
          src: 'https://www.linkedin.com/in/satokokora/'
      };
    }
    render(){
        return(
            <div>
            <Language></Language>
            {/* <div id="content">
                 <Language></Language> 
                <div className="filter">
                <input type="radio" id="tag-0" className="filter-tag" name="filter-radio" hidden checked />
                <input type="radio" id="tag-1" className="filter-tag" name="filter-radio" hidden />
                <input type="radio" id="tag-2" className="filter-tag" name="filter-radio" hidden />

                <div className="filter-nav">
                    <label className="chip" for="tag-0">All</label>
                    <label className="chip" for="tag-1">Action</label>
                    <label className="chip" for="tag-2">Roleplaying</label>
                </div>

                <div className="filter-body">
                <div className="filter-body">
                <div className="columns">
                    <div className="column col-6 filter-item" data-tag="tag-2">
                    <div className="card">
                        <div className="card-header">
                          <div className="card-title text-bold">Halo 5</div>
                          <div className="card-subtitle text-gray">Shooter</div>
                        </div>
                      </div>
                    </div>
                    <div className="column col-6 filter-item" data-tag="tag-3">
                      <div className="card">
                        <div className="card-header">
                          <div className="card-title text-bold">Halo 5</div>
                          <div className="card-subtitle text-gray">Shooter</div>
                        </div>
                      </div>
                    </div>
                    

                    <div className="column col-6 filter-item" data-tag="tag-1">
                      <div className="card">
                        <div className="card-header">
                          <div className="card-title text-bold">Quantum Break</div>
                          <div className="card-subtitle text-gray">Action</div>
                        </div>
                      </div>
                    </div>
                    <div className="column col-6 filter-item" data-tag="tag-4">
                      <div className="card">
                        <div className="card-header">
                          <div className="card-title text-bold">Forza Horizon 3</div>
                          <div className="card-subtitle text-gray">Sports</div>
                        </div>
                      </div>
                    </div>
                    </div>
                </div>    

                    
                </div>
                </div>
                
            </div> */}
            </div>
        );
    }
}
export default Content;