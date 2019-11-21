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
  debugger
  return userReviews;
}

export const selectSiteAuthor = (sites, userId) => {
  
  // return Object.values(sites).filter(site => (
  //   site.author === userId
  // ))
  
}