import React, {Component} from 'react';
import * as Constants from '../Util/Constants';
import 'dotenv';


class Topic extends Component{
    constructor(props){
        super(props);
        this.state={
            repos:[],
            topics:[],
            filters:[],
        };
    }
    filterByTopic(topic)
    {
        
        var cards = document.getElementsByClassName('card');

        var i;
        for (i = 0; i < cards.length; i++) {
            
            if (cards[i].dataset.topic && cards[i].dataset.topic.includes("," + topic))
            {
                cards[i].style.display = 'block';
            }
            else
            {
                cards[i].style.display = 'none';
            }
        }

    }

    findTopic(title) {
        var arrTopics = this.state.topics;
        for (var i=0;i<arrTopics.length;i++)
        {
            if(arrTopics[i].key===title)
            {
                return arrTopics[i].value;
            }
        }
    //return this.state.topics?this.state.topics[index]:null;
    }
    fetchTopicRepos()
    {
        let url = `${Constants.API}/${Constants.USER_NAME}/repos`;

        fetch(url)
          .then((res) => res.json() )
          .then((data) => {
            // var sortedRepos = data.sort(function(a, b){
            //     var x = a.created_at.toLowerCase();
            //     var y = b.created_at.toLowerCase();
            //     if (x < y) {return -1;}
            //     if (x > y) {return 1;}
            //     return 0;
            //   });
            
            
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

            var commaTopics="";
            var commaTopicArray=[];
            var topicsArray=[];
            var uniqueTopics= [];

            
            for (var i=0; i < data.length; i++) {

                
                
                var query = `{
                    repository(owner: "${Constants.USER_NAME}", name: "${data[i].name}") {
                    name
                    repositoryTopics(first: 100) {
                        edges {
                        node {
                            topic {
                            name
                            }
                        }
                        }
                    }
                    }
                }`;

               
           
            fetch(Constants.GITHUB_GRAPHQL_API, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
                'Accept': 'application/json',
                },
                body: JSON.stringify({
                query
                })
            })
            .then(r => r.json())
            .then(result =>{
                var nodes = result.data.repository.repositoryTopics.edges;

                var repoName = result.data.repository.name;
                if(nodes.length>0)
                {
                    for (var idx=0; idx < nodes.length; idx++) {
                        topicsArray.push(nodes[idx].node.topic.name);
                         commaTopics+="," + nodes[idx].node.topic.name;
                    }
                   
                }
                
                //commaTopicArray.push(commaTopics);
                commaTopicArray.push({
                    key:   repoName,
                    value: commaTopics
                })
                commaTopics="";

                uniqueTopics = Array.from(new Set(topicsArray));

                this.setState({ 
                    topics:commaTopicArray,
                    filters:uniqueTopics
                });

                 
            } );
        }
      }).catch((error) => console.log(JSON.stringify(error)) )
        
    }
    async componentDidMount() {
        this.fetchTopicRepos();
        
      }
    render() {
        return (
          <div id="content">
          <div className="filter">
                <input type="radio" id="tag-0" className="filter-tag" name="filter-radio" hidden defaultChecked />
                {this.state.filters.map((val,index) => (
                    <input type="radio" id={"tag-"+(index+1)} className="filter-tag" name="filter-radio" key={index} hidden />
                ))}
            
                <div className="filter-nav">
                    
                    {this.state.filters.map((topic,index) => (
                        <div className="chip" tabindex={(index+1)}  onClick={() => { this.filterByTopic(topic)} } >{topic}</div>
                    ))}
                </div>
            

                <div className="filter-body">
                    <div className="filter-body">
                    <div class="row">
                        <div className="columns">
                        {this.state.repos.map((item,index) => (
                            <div class="col s12 m6">
                                <div class="card blue-grey darken-1" data-topic={this.findTopic(item.name)}>
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

export default Topic;