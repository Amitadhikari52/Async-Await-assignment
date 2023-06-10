const posts = [{title: 'POST1'}];

function create2ndPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({title: 'POST2'});
      resolve();
    }, 3000);
  });
}

function create3rdPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({title: 'POST3'});
      resolve();
    }, 2000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const poppedElement = posts.pop();
        resolve(poppedElement);
      } else {
        reject("ERROR: ARRAY IS EMPTY");
      }
    }, 1000);
  });
}

const performOperations = async () => {
  try {
    await create2ndPost();
    const response1 = await deletePost();
    console.log(response1.title);
    await create3rdPost();
    const response2 = await deletePost();
    console.log(response2.title);
    const response3 = await deletePost();
    console.log(response3.title);
    const response4 = await deletePost();
    console.log(response4.title);
    const response5 = await deletePost();
    console.log(response5.title);
  } catch (error) {
    console.log(error);
  }
};

performOperations();
