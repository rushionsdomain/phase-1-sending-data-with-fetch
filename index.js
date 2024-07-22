function submitData(name, email) {
  const url = "http://localhost:3000/users";

  const userData = {
    name: name,
    email: email,
  };

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      document.body.innerHTML += `<p>New user ID: ${data.id}</p>`;
    })
    .catch((error) => {
      document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    });
}
