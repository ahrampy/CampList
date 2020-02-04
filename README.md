# [CampList](http://camplist-mern.herokuapp.com/#/)
A site built for campers, by campers.


## Background and Overview

The Bureau of Land Management (BLM) is responsible for overseeing approximately 250 million acres or ⅛ of the entire country. While the agency maintains regulated zones for some recreational activity, there are many areas of the BLM outside of these boundaries which contain unlisted camp sites, hiking trails, and other attractions. CampList offers to be the first unofficial guidebook for finding and planning your camping trips to these areas of untapped wilderness.

The users of CampList can expect to:
* Explore and filter a collection of campsites, areas of interest, and rated reviews
* Get directions and the locations of listed campsites, along with any accesable parking and hiking trails nearby.
* Create and review new campsites, and add photos to any existing listing

This is a site built to share camping spots that would otherwise be considered "off the grid", since much of BLM territory is not registered within other camp systems, and only has a resources listing ranger stations and other govermental entities, even though all BLM is accessible and free to the public to use as camping space. With the addition of hiking and parking map markings, and a listing of what other features a found spot might have nearby, we hope to open up what has historically been untapped wilderness exploration for those looking for something either different or simply nearby. Thanks for taking a look at out Git!

## Technologies
CampList is a web application built with MERN stack (MongoDB, Express, React and Node).

Technologies:

Backend: Express.js and MongoDB for simplified, non-relational storage for speed and cross-device accessability through developement

Frontend: Node.js, React and Redux for single-page site flow

Google Maps API

Amazon Web Service*

## Features

### Responsive Campsite Filtering
In order to allow users to see what site features may be available at sites they are considering, or can't go without. If you just want to go for a swim, or need a fire to tell your ghost stories, find out which spots to visit!

<p align="center">
  <img src="gifs/campListFilter.gif" width="80%">
</p>   

```
handleCheck(attr) {
  let newItemCheck = []
  if (!this.state.itemChecked) {
    this.setState({ itemsChecked: [attr.name] })
  } else {
    for (let i = 0; i < this.state.itemChecked.length; i++) {
      newItemCheck[i] = this.state.itemChecked[i];
    }
    newItemCheck.push(attr.name);
    this.setState({
      itemChecked: newItemCheck
    })
  }
}

handleUncheck(attr) {
  let { itemChecked } = this.state;
  let newItemCheck = []
  for (let i = 0; i < itemChecked.length; i++) {
    newItemCheck[i] = itemChecked[i];
  }
  newItemCheck.splice(newItemCheck.indexOf(attr.name), 1)
  this.setState({
    itemChecked: newItemCheck
  })
}
```

### Review Campsites and Vote on Comments
We want to give users the option of adding their personal experience at a site (in addition to being able to add photos of their experience, and to vote on how helpful they consider other reviews.

<p align="center">
  <img src="gifs/campListComment.gif" width="80%" >
</p> 

```
handleUpvote(e) {
  e.preventDefault()

  const id = e.target.value
  const data = {id, user: this.props.currentUserId}

  let ans = this.props.reviews.filter(review => {
    return review._id === id
  })

  if (ans[0].downvotes.includes(this.props.currentUserId)) {
    this.props.addUpvote(data) && this.props.removeDownvote(data)
  }
  else if (ans[0].upvotes.includes(this.props.currentUserId)) {
    this.props.removeUpvote(data)
  } else {
    this.props.addUpvote(data);
  }
}
```

### Mark Locations of Nearby Features
Campers often want to do more outdoors than just camp! Once you're out there, it is often the highlight of the trip find a good hike, or to find a new fishing spot nearby; and we all need to know where to park.

<p align="center">
  <img src="gifs/campListCreate.gif" width="80%" >
</p>   

```
constructor(props) {
  super(props);
  this.state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedTag: {},
    currentPosition: { lat: null, lng: null }
  };
  this.onMarkerClick = this.onMarkerClick.bind(this);
  this.onClose = this.onClose.bind(this);
}

onMarkerClick = (props, marker, e) => {
  return this.setState({
    selectedTag: props,
    activeMarker: marker,
    showingInfoWindow: true
  });
};

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};
```

## Future Plans

*Integrate AWS to allow ease of use while maintaining minimized storage needs
