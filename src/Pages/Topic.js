import React, {Component} from 'react';
import * as Constants from '../Util/Constants';


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
                console.log(cards[i].dataset.topic);
            }
            else
            {
                cards[i].style.display = 'none';
            }
        }

    }

    findTopic(index) {
    return this.state.topics?this.state.topics[index]:null;
    }
    fetchTopicRepos()
    {
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

            var commaTopics="";
            var commaTopicArray=[];
            var topicsArray=[];
            var uniqueTopics= [];
            
            for (var i=0; i < data.length; i++) {
                var query = `{
                    repository(owner: "${Constants.USER_NAME}", name: "${data[i].name}") {
                    repositoryTopics(first: 10) {
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
                'Authorization': Constants.AUTHORIZATION_KEY,
                'Accept': 'application/json',
                },
                body: JSON.stringify({
                query
                })
            })
            .then(r => r.json())
            .then(data =>{

                var nodes = data.data.repository.repositoryTopics.edges;

                if(nodes.length>0)
                {
                    for (var i=0; i < nodes.length; i++) {
                        topicsArray.push(nodes[i].node.topic.name);
                         console.log(nodes[i].node.topic.name);
                         commaTopics+="," + nodes[i].node.topic.name;
                    }
                   
                }

                commaTopicArray.push(commaTopics);
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
                                <div class="card blue-grey darken-1" data-topic={this.findTopic(index-1)}>
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