export const selectSites = (sites, attrs) => {
  let selectSites = [];
  sites.map(site => {
    if (attrs.every(val => site.siteFeatures[val])) {
        selectSites.push(site)
    }
  })
  return selectSites;
}

export const selectSiteReviews = (sites, userId) => {
  // reviews = []
  // sites.forEach(site => (
  //   site.reviews.forEach(review => (
  //     review.author === userId ? reviews.push(review)
  //   ))
  // ))
}

export const selectSiteAuthor = (sites, userId) => {
  
  return Object.values(sites).filter(site => (
    site.author === userId
  ))
  
}