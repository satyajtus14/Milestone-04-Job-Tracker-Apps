// console.log("i am connected")


// Manage id > Hide all id > Then show only selected id

function showOnly(id){
    const interviewSelected = document.getElementById('interview-selected');
    const rejectSelected = document.getElementById('reject-selected');
 

    // Hidden all options to menu
    interviewSelected.classList.add("hidden");
    rejectSelected.classList.add("hidden");


    // Only unhide which selected and send id to function
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}