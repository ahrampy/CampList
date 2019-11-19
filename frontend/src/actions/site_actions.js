import * as APIUtil from '../util/site_api_util'

export const RECEIVE_SITE = "RECEIVE_SITE";
export const RECEIVE_SITES = "RECEIVE_SITES";

export const receiveSite = site => ({
  type: RECEIVE_SITE,
  site
})

export const receiveSites = sites => ({
  type: RECEIVE_SITES,
  sites
});

export const fetchSite = id => dispatch => (
  APIUtil.getSite(id)
    .then(site => dispatch(receiveSite(site)))
);

export const fetchSites = () => dispatch => (
  APIUtil.getSites()
    .then(sites => dispatch(receiveSites(sites)))
);

// export const fetchUserSites = id => dispatch => (
//   APIUtil.getUserSites(id)
//     .then(sites => dispatch(receiveUserSites(sites)))
// );

export const createNewSite = data => dispatch => (
  APIUtil.postNewSite(data)
    .then(site => dispatch(receiveSite(site)))
);