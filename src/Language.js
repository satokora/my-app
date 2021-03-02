import React, {Component} from 'react';
import * as Constants from './Constants';

//const API="https://api.github.com/users";
class Language extends Component{
    constructor(props){
        super(props);
        this.state={
            repos:[],
            langs:[],
            tags:[],
            repoArray:[],
            tagArray:[]
        };
    }
    

    checkTag(lang, compare) {
    return lang == compare;
    }
     findLang(index) {
        return this.state.langArray?this.state.langArray[index]:null;
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
            var repoArray=[];
            var commaLangs="";
            var commaLangArray=[];
            //var tagArray=[];
            for (var i=0; i < data.length; i++) {
                repoArray.push(data[i].id);
                fetch(data[i].languages_url)
                .then((res) => res.json() )
                .then((langs) => {
                   var lgs=[];
                    for (var key in langs) {
                        
                        // check if the property/key is defined in the object itself, not in parent
                        if (langs.hasOwnProperty(key)) {  
                            lngArray.push(key);
                            commaLangs+="," + key;
                           
                            //lgs.push(key);
                            uniqueItems = Array.from(new Set(lngArray));
                        }
                    }
                    console.log(commaLangs);
                    commaLangArray.push(commaLangs);
                    commaLangs="";
                    
                    
                    this.setState({ 
                        langArray:commaLangArray,
                        langs:uniqueItems
                       });

                    //    this.setState(prevState => {
                    //     let repoLangs = Object.assign({}, prevState.jasper);  // creating copy of state variable jasper
                    //     jasper.name = 'someothername';                     // update the name property, assign a new value                 
                    //     return { jasper };                                 // return new object jasper object
                    //   })
                    
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
            
                <div className="filter-nav">
                    
                    {this.state.langs.map((lang,index) => (
                        /* <div className="chip" htmlFor={"tag-"+(index+1)} key={index}>{lang}</div> */
                        <div className="chip" tabindex={(index+1)} >{lang}</div>
                    ))}
                </div>

                <div className="filter-body">
                    <div className="filter-body">
                    <div class="row">
    
  
                        <div className="columns">
                        {this.state.repos.map((item,index) => (
                            <div class="col s12 m6">
                            <div class="card blue-grey darken-1" data-language={this.findLang(index)}>
                                <div class="card-content white-text">
                                <a href={item.html_url}><span class="card-title orange-text text-lighten-2">{item.name}</span></a>
                                <p>{item.description}</p>
                                </div>
                                {/* <div class="card-action">
                                <a href="#">This is a link</a>
                                <a href="#">This is a link</a>
                                </div> */}
                            </div>
                            </div>
                            /* <div className="column col-6 filter-item" data-tag={"tag-"+(this.state.tags[index]+1)} key={index}>
                                <div className="card">
                                    <div className="card-header">
                                    <div className="card-title text-bold"><a href={item.html_url}>{item.name}</a></div>
                                    <div className="card-subtitle text-gray">{item.description}</div>
                                    </div>
                                </div>
                            </div> */
                        
                        ))}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
      }
}

export default Language;