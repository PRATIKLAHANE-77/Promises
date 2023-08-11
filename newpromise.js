// const obj = [];

// let createpost = new Promise((resolve, reject) => {
//   let a = obj.push({ title: "post3" });
//   let b = obj.push({ title: "post1"});
//   let c = obj.push({ title: "post2"});
//   resolve([a,b,c]);
// });
// let deletepost = new Promise((resolve, reject) => {
//   if(obj.length>0) {
//     let deletepost = obj.pop();
//     resolve(deletepost);
//   }
//   else{
//     resolve('no post for deletion');
//   }
// });

// let updateLastUserActivityTime = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let time = new Date().getTime();
//    let timeup = obj.push({'lastUpdateTiem':time});
//     resolve(timeup);
//   }, 1000);
// });

// function print() {
//   Promise.all([createpost, updateLastUserActivityTime])
//     .then(([createdObj, lastActivityTime]) => {
//       console.log(createdObj);
//       console.log("Last activity time updated:", lastActivityTime);
//       deletepost.then((g) => {
//         console.log("deleted post");
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// print();
const obj = [];

let createPost = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      obj.push({ title: "post1" });
      obj.push({ title: "post2" });
      obj.push({ title: "post3" });
      resolve(obj);
    }, 1000); 
  });
};

let deleteLastPost = () => {
  return new Promise((resolve, reject) => {
    if (obj.length > 0) {
      let deletedPost = obj.pop();
      resolve(deletedPost);
    } else {
      reject("No posts to delete");
    }
  });
};

let updateLastUserActivityTime = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let time = new Date().toISOString();
      resolve(time);
    }, 1000); 
  });
};

function print() {
  Promise.all([createPost(), updateLastUserActivityTime()])
    .then(([createdObj, lastActivityTime]) => {
      console.log("Posts created:", createdObj);
      console.log("Last activity time updated:", lastActivityTime);

      return deleteLastPost();
    })
    .then((deletedPost) => {
      console.log("Deleted post:", deletedPost);
      console.log("Remaining posts:", obj);
    })
    .catch((error) => {
      console.error(error);
    });
}

print();