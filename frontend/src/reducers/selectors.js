export const selectSites = (sites, attrs) => {
  let selectSites = [];
  sites.map(site => {
    if (attrs.every(val => site.siteFeatures[val])) {
        selectSites.push(site)
    }
  })
  return selectSites;
}

export const selectUserReviews = (reviews, userId) => {
  let userReviews = [];
  reviews.forEach(review => {
    if (review.author === userId) {
      userReviews.push(review)
    }
  })
  return userReviews;
}

export const selectSiteAuthor = (sites, userId) => {
  let userSites = [];
  sites.forEach(site => {
    if (site.author === userId) {
      userSites.push(site)
    }
  })
  let bugFix = Array.from(new Set(userSites.map(review => review._id)))
    .map(_id => {
      return userSites.find(a => a._id === _id)
    })
  return bugFix
}

// every review needs a {..., name: "siteName"}
export const selectSiteNames = (sites, reviews) => {
  
  let displayReview = [];
  reviews.forEach(review => {
    sites.forEach(site => {
      if (site._id === review.site) review['name'] = site.name;
    })
    return displayReview.push(review)
  })
  return displayReview
}

export const selectReviewNames = (users, reviews) => {
  let displayReview = [];
  reviews.forEach(review => {
    users.forEach(user => {
      if (user._id === review.author) review['username'] = user.username;
    })
    return displayReview.push(review)
  })
  return displayReview;
}

export const selectSiteAuthorName = (sites, users) => {
  let authorId;
  let siteAuthor;
  sites.forEach(site => {
    authorId = site.author;
  })
  users.forEach(user => {
    if (user._id === authorId) {
      siteAuthor = user;
    }
  })
  return siteAuthor;
}

export const selectUserPhotos = (sites, user) => {
  const ans = [];
  sites.forEach(site => {
    site.photoUrl.forEach(photoObj => {
      if (photoObj.author === user) ans.push(photoObj) 
    })
  })
  return ans
}