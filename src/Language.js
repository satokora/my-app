import React, {Component} from 'react';
import * as Constants from './Constants';

const API="https://api.github.com/users";
class Language extends Component{
    constructor(props){
        super(props);
        this.state={
            repos:[],
            langs:[]
        };
    }
    fetchLangRepos() { 
        let url = `${Constants.API}/${Constants.USER_NAME}/repos`;
        fetch(url)
          .then((res) => res.json() )
          .then((data) => {
            this.setState({
              username: data.login,
              name: data.name,
              avatar: data.avatar_url,
              location: data.location,
              repos: data,
              followers: data.followers,
              following: data.following,
              homeUrl: data.html_url,
              notFound: data.message,
              bio:data.bio
            });
            var lngArray=[];
            var uniqueItems = [];
            for (var i=0; i < data.length; i++) {
                fetch(data[i].languages_url)
                .then((res) => res.json() )
                .then((langs) => {
                   
                    for (var key in langs) {
                        // check if the property/key is defined in the object itself, not in parent
                        if (langs.hasOwnProperty(key)) {  
                            lngArray.push(key);
                            uniqueItems = Array.from(new Set(lngArray));
                            
                        }
                    }
                    this.setState({ 
                        // langs: this.state.langs.concat(key)
                        langs:uniqueItems
                       });
                    
                })
            .catch((error) => console.log(JSON.stringify(error)));
        }
      }).catch((error) => console.log(JSON.stringify(error)) )
      }
    async componentDidMount() {
        this.fetchLangRepos();
        
      }
    render() {
        return (
          <div id="content">
            <div className="filter">
                <input type="radio" id="tag-0" className="filter-tag" name="filter-radio" hidden defaultChecked />
                {this.state.langs.map((lang,index) => (
                    <input type="radio" id={"tag-"+(index+1)} className="filter-tag" name="filter-radio" key={index} hidden />
                ))}
            </div>
            <div className="filter-nav">
                <label className="chip" htmlFor="tag-0">All</label>
                {this.state.langs.map((lang,index) => (
                    <label className="chip" htmlFor={"tag-"+(index+1)} key={index}>{lang}</label>
                ))}
            </div>

            <div className="filter-body">
                <div className="filter-body">
                    <div className="columns">
                    {this.state.repos.map((item,index) => (
                        <div className="column col-6 filter-item" data-tag={"tag-"+(index+1)} key={index}>
                            <div className="card">
                                <div className="card-header">
                                <div className="card-title text-bold"><a href={item.html_url}>{item.name}</a></div>
                                <div className="card-subtitle text-gray">{item.description}</div>
                                </div>
                            </div>
                        </div>
                    
                    ))}
                    </div>
                </div>
            </div>

          </div>
        );
      }
}

export default Language;