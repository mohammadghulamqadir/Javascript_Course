//  Synchoronous is blocking the program until the first line s=finish the code.  
//  Asynchoronous is a programming that works dynamically 

// document.write("Before <br/>");

// setTimeout(() => {// it is Asynchoronous function
//     document.getElementById("check").innerHTML = "Reading a user from the database";
// }, 2000);

// document.write("After");

console.log("Hello Qadir")
// callback
getUser(1, getRepositories)
    console.log("User", getRepositories)//This Nested structure 
    function getRepositories(user) {
        getRepositories(user.gitHubUsername, getCommits)
    }
    function getCommits(repos) {
        getCommits(repo, displaycommit)
    }

    console.log("Hello GHULAM")
    function displaycommit(commits) {
        console.log(commits);
    }
 


    function getUser(id, callback) {
        setTimeout(() => {// it is Asynchoronous function
            console.log("Reading a user from the database")
            callback({ id: id, gitHubUsername: "mosh" })
        }, 2000);//Single thread 
    }
    function getRepositories(username, callback) {
        setTimeout(() => {
            console.log("Calling GitHUb API")
            callback(['repo1', 'repo2', 'repo3']);
        }, 2000);
    }