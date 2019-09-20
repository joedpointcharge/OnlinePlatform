// jQuerry declaration.
$(document).ready(function () {
  // update for applicant
  $("#appsignup").click((event)=> {// 
    event.preventDefault();
    const firstName= $("#firstname").val();
    const lastName = $("#lastname").val();
    const email = $("#exampleInputEmail1").val();
    const password = $('#exampleInputPassword1').val();
    let post = {
      firstName,
      lastName,
      email,
      password
      };
      if (firstName === "" || lastName ==="" || email === "" || password === "" ) {
        alert("Please input your details correctly");        
      }
        $.post("http://localhost:3000/applicant", post, alert("Information uploaded successfully")); 
  });
  // update

  $("#post").click((event)=> {
    event.preventDefault();
    const jobType= $("#jobtype").val();
    const jobDescription = $("#jobdescription").val();
    const jobLink = $("#joblink").val();
    const jobLocation = $('#joblocation').val();
    const jobIndustry = $("#jobindustries").val();
    const companyName = $('#companyname').val();
    const companyAddress = $('#compaddress').val();
    let post = {
      jobType,
      jobDescription,
      jobLink,
      jobLocation,
      jobIndustry,
      companyName,
      companyAddress
      } 
      $.post("http://localhost:3000/jobs", post, alert("Information uploaded successfully"))
  });
  // post
  $.getJSON("http://localhost:3000/jobs", function(data){
    for (let i = 0; i < data.length; i++) {
      let id = data[i]["id"];
      let jobType = data[i]["jobType"];
      let jobDescription = data[i]["jobDescription"];
      let jobLink = data[i]["jobLink"];
      let jobLocation = data[i]["jobLocation"];


      //$("#jobpost").append(`<h6> ${id} </h6>`);
      $("#jobpost").append(`<h6><strong>Job Type: </strong> ${jobType} </h6>`);
      $("#jobpost").append(`<h6><strong>Job Description: </strong> ${jobDescription} </h6>`);
      $("#jobpost").append(`<h6><strong>Job Link: </strong><a href="${jobLink}">${jobLink}</a> </h6>`);
      $("#jobpost").append(`<h6><strong>Job Location: </strong> ${jobLocation} </h6>`);
      $("#jobpost").add().append(`<button>  Delete <button>`);
      $("#jobpost").append(`<hr>`);
      

    }
  });








});