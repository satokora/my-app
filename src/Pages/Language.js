import React, {Component} from 'react';
import * as Constants from '../Util/Constants';


class Language extends Component{
    constructor(props){
        super(props);
        this.state={
            repos:[],
            langs:[],
            tags:[],
            tagArray:[]
        };
    }
    filterByLanguage(lang)
    {
        console.log(lang);
        var cards = document.getElementsByClassName('repo-card');

        var i;
        for (i = 0; i < cards.length; i++) {
            
            if (cards[i].dataset.language && cards[i].dataset.language.includes("," + lang))
            {
                cards[i].style.display = 'block';
                console.log(cards[i].dataset.language);
            }
            else
            {
                cards[i].style.display = 'none';
            }
        }

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
            var commaLangs="";
            var commaLangArray=[];
            
            for (var i=0; i < data.length; i++) {
               
                fetch(data[i].languages_url)
                .then((res) => res.json() )
                .then((langs) => {
                   var lgs=[];
                    for (var key in langs) {
                        if (langs.hasOwnProperty(key)) {  
                            lngArray.push(key);
                            commaLangs+="," + key;
                            uniqueItems = Array.from(new Set(lngArray));
                        }
                    }
                    commaLangArray.push(commaLangs);
                    commaLangs="";
                    this.setState({ 
                        langArray:commaLangArray,
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
            
                <div className="filter-nav">
                    
                    {this.state.langs.map((lang,index) => (
                        <div className="chip" tabindex={(index+1)}  onClick={() => { this.filterByLanguage(lang)} } >{lang}</div>
                    ))}
                </div>

                <div className="filter-body">
                    <div className="filter-body">
                    <div class="row">
                        <div className="columns">
                        {this.state.repos.map((item,index) => (
                            <div class="col s12 m6">
                                <div class="card repo-card blue-grey darken-1" data-language={this.findLang(index)}>
                                    <div class="card-content white-text">
                                        <a href={item.html_url}><span class="card-title orange-text text-lighten-2">{item.name}</span></a>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
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