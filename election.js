document.addEventListener("DOMContentLoaded", function() {
  var resultsList = document.getElementById('results');

  $.ajax({
    url: "https://bb-election-api.herokuapp.com/",
    method: "GET",
    data: {},
    dataType: 'json'
  }).done(function(responseData){
      var candidateResults = responseData.candidates
      for (var i = 0; i < candidateResults.length; i++) {
        var candidateName = candidateResults[i]['name'];
        var candidateVotes = candidateResults[i]['votes'];

        var electionResults = document.createElement("li");
        electionResults.innerText = candidateName + ": " + candidateVotes + " votes";
        resultsList.appendChild(electionResults);
      }
  });
});
