import React, {Component} from 'react';
import * as Constants from '../Util/Constants';


class Timeline extends Component{
    constructor(props){
        super(props);
        this.state={
            repos:[],
            timelines:[],
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

    GetDescOrder(prop) {    
        return function(a, b) {    
            if (a[prop] > b[prop]) {    
                return -1;    
            } else if (a[prop] < b[prop]) {    
                return 1;    
            }    
            return 0;    
        }    
    }  
    fetchTopicRepos()
    {
        let url = `${Constants.API}/${Constants.USER_NAME}/repos`;

        fetch(url)
          .then((res) => res.json() )
          .then((data) => {
            data.sort(this.GetDescOrder("created_at"));
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

            var timelineArray=[];
            var YearMonths= [];
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            
            for (var i=0; i < data.length; i++) {

                var createdDate = new Date(data[i].created_at);
                var labelVal = months[createdDate.getMonth()] + " " + createdDate.getFullYear();
                timelineArray.push(labelVal);
            }

            YearMonths = Array.from(new Set(timelineArray));

                this.setState({ 
                    timelines:timelineArray,
                    filters:YearMonths
                });
            
      }).catch((error) => console.log(JSON.stringify(error)) )
        
    }

    
    async componentDidMount() {
        this.fetchTopicRepos();
        
  
      }
    render() {
        return (
    <div className="row">
    <div className="col hide-on-small-only m4 l3">
            <div className="toc-wrapper pinned" >
                <ul className="section table-of-contents">
                {this.state.filters.map((label,index) => (
                    //<li><a className={index===0?'active':''}  href={"#tag-"+(index+1)}>{label}</a></li>
                    <li key={"scroll-"+(index+1)}><a href={"#tag-"+(index+1)}>{label}</a></li>
                ))}
                    
                </ul>
            </div>
        </div>
        <div className="col s12 m8 l9">
            <div className="filter-body">
                <div className="filter-body">
                    <div className="row">
                        {this.state.filters.map((label,index) => (
                            <div id={"tag-"+(index+1)} key={"section-"+(index+1)} className="scrollspy section">
                            <h5>{label}</h5>
                            {this.state.repos.map((item,index) => (
                                this.state.timelines[index]===label &&
                                <div className="card blue-grey darken-1" key={"card-"+(index+1)}>
                                        <div className="card-content white-text">
                                            <a href={item.html_url}><span className="card-title orange-text text-lighten-2">{item.name}</span></a>
                                            <i>{this.state.timelines[index]}</i>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                            </div>
                        ))}
                    
                    </div>
                </div>
            </div>
        </div>
        
    </div>
        )}
}

export default Timeline;