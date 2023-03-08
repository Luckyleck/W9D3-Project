const csrfToken = document.querySelector("meta[name=csrf-token]").content;
// export const foo = "bar";

async function customFetch(url, options = {}) {
  options.headers = {
    "X-CSRF-Token" : csrfToken,
    ...options.headers
  };

  return await fetch(url, options);
}


export function followUser(id) {

  customFetch(`/users/${id}/follow`, {
    method: "POST",
    credentials: 'include',
    headers: { 
      "Content-Type": "application/json",
      "Accept": "application/json"}
  })
}


export function unfollowUser(id) {


  customFetch(`/users/${id}/follow`, {
    method: "DELETE",
  credentials: 'include',
    headers: { 
      "Content-Type": "application/json",
      "Accept": "application/json"}
  })
}




//how are we supposed to call followState(newState) correctly?