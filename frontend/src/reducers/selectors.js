// export const selectSites = (sites, attrs) => {
//   debugger
//   sites.filter(site => {
    
//     attrs.every(attr => site.siteFeatures[attr])
//     debugger
//   })
// }

export const selectSites = (sites, attrs) => {
  let selectSites = [];
  sites.map(site => {
    if (attrs.every(val => site.siteFeatures[val])) {
        selectSites.push(site)
    }
  })
  debugger
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