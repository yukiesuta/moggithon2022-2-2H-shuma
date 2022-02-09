'use strict'

const form = document.getElementById('issueInputForm');


form.addEventListener('submit', input);

function input(e) {
    let descriptionInput = document.getElementById('issueDescInput').value;
    let severityInput = document.getElementById('issueSeverityInput').value;
    let assignedToInput = document.getElementById('issueAssignedToInput').value;
    let statusInput = 'open';
    let idInput = chance.guid();


    let issue = {
        description: descriptionInput,
        severity: severityInput,
        assignedTo: assignedToInput,
        status: statusInput,
        id: idInput,
    }
    if (localStorage.getItem('issues') == null) {
        var issues = [];
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    } else {
        var issues = JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    }

    form.reset();

    fetchIssues();

    e.preventDefault();
}


function closeIssue(id){
var issues = JSON.parse(localStorage.getItem('issues'));

for (var i = 0; i < issues.length; i++) {
    if(issues[i].id === id){
        issues[i].status = 'Closed';
    }
}
localStorage.setItem('issues', JSON.stringify(issues));

fetchIssues();
}

function deleteIssue(id) {
    var issues = JSON.parse(localStorage.getItem('issues'));
  
    for (var i = 0; i < issues.length; i++) {
      if (issues[i].id == id) {
        issues.splice(i, 1);
      }
    }
  
    localStorage.setItem('issues', JSON.stringify(issues));
  
    fetchIssues();
  }

function fetchIssues() {
    // データの取得
    // console.log(localStorage.getItem('issues'));
    let issues = JSON.parse(localStorage.getItem('issues'));
    console.log(issues);

    // データを表示する先のHTML
    let issuesList = document.getElementById('issuesList');

    issuesList.innerHTML = '';
    for (var i = 0; i < issues.length; i++) {
        let id = issues[i].id;
        let desc = issues[i].description;
        let severity = issues[i].severity;
        let assignedTo = issues[i].assignedTo;
        let status = issues[i].status;

        issuesList.innerHTML += `
        <div class="well border px-5 py-3 bg-light">
        <h6>Issue ID: ${id}</h6>
        <p><span class="label label-info btn btn-info">${status}</span></p>
        <h3>${desc}</h3>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"/>
                <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"/>
              </svg>
        <p class="d-inline"><span class="glyphicon glyphicon-time">${severity}</span></p>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
        <p class="d-inline"><span class="glyphicon glyphicon-user">${assignedTo}</span></p>
        <a href="#" onclick="closeIssue('${id}')" class="btn btn-warning">Close</a>
        <a href="#" onclick="deleteIssue('${id}')" class="btn btn-danger">Delete</a>
        </div>
        </div>
        </div>`
        
        // issuesList.innerHTML +=   '<div class="well">'+
        // '<h6>Issue ID: ' + id + '</h6>'+
        // '<p><span class="label label-info">' + status + '</span></p>'+
        // '<h3>' + desc + '</h3>'+
        // '<p><span class="glyphicon glyphicon-time"></span> ' + severity + '</p>'+
        // '<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>'+
        // '<a href="#" onclick="closeIssue(+ id +)" class="btn btn-warning">close</a> '+
        // '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>'+
        // '</div>';
        
    }
    // console.log(issuesList);
}
{/* <a href="#" onclick="closeIssue(\''${id}'\')" class="btn btn-warning">close</a>
<a href="#" onclick="deleteIssue(\''${id}'\')" class="btn btn-danger">Delete</a>  */}
// \' = '



var a = "ジャバ\スク\nリプト";
var b = String.raw`ジャバ\スク\nリプト`;
var c = `ジャバ\スク\nリプト`;
console.log( a === b ); // true
console.log( a ); // ジャバ\スク\nリプト