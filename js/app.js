// 1
function gitInit(callBack) {
  setTimeout(() => {
    console.log("git init");
    callBack();
  }, 1000);
}

// 2
function gitBranch(callBack) {
  setTimeout(() => {
    console.log("git add branch");
    callBack();
  }, 1000);
}

// 3
function gitCommit(callBack) {
  setTimeout(() => {
    console.log('git commit -m "hello"');
    callBack();
  }, 1000);
}

// 4
function makeRepository(callBack) {
  setTimeout(() => {
    console.log("make repository");
    callBack();
  }, 1000);
}

// 5
function makeReadMe(callBack) {
  setTimeout(() => {
    console.log("make read me");
    callBack();
  }, 1000);
}

// 6
function makeOrigin(callBack) {
  setTimeout(() => {
    console.log("make origin");
    callBack();
  }, 1000);
}

// 7
function addOrgin(callBack) {
  setTimeout(() => {
    console.log("origin add");
    callBack();
  }, 1000);
}

// 8
function gitPush(callBack) {
  setTimeout(() => {
    console.log("git push origin main");
    callBack();
  }, 1000);
}

//9
function refresh(callBack) {
  setTimeout(() => {
    console.log("refresh the web page");
    callBack();
  }, 1000);
}

//10
function fork() {
  setTimeout(() => {
    console.log("forked");
  }, 1000);
}

gitInit(() => {
  gitBranch(() => {
    gitCommit(() => {
      makeRepository(() => {
        makeReadMe(() => {
          makeOrigin(() => {
            addOrgin(() => {
              gitPush(() => {
                refresh(() => {
                  fork(() => {});
                });
              });
            });
          });
        });
      });
    });
  });
});
