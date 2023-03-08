const csrfToken = document.querySelector("meta[name=csrf-token]").content;
// export const foo = "bar";

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    ...options.headers
  };

  return await fetch(url, options);
}



function followUser(id) {

  const newFollowState = {content: "Followed"}

  customFetch(`/users/${id}/follow`, {
    method: "POST",
    body: JSON.stringify(newFollowState),
    credentials: 'include',
    headers: {
      "Content-Type" : "application/json",
      "Accept" : "application/json"
    }
  })
}


function unfollowUser(id) {

  const newFollowState = {content: "Unfollowed"}

  customFetch(`/users/${id}/follow`, {
    method: "DELETE",
    body: JSON.stringify(newFollowState),
    credentials: 'include',
    headers: {
      "Content-Type" : "application/json",
      "Accept" : "application/json"
    }

  })
}




//how are we supposed to call followState(newState) correctly?