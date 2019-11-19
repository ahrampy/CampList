export const selectSites = (sites, attrs) => {
  return sites.filter(site => (
    attrs.every(attr => site.siteFeatures[attr])
  ))
}

export const selectSiteReviews = (sites, userId) => {

}