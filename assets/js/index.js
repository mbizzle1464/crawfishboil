// Initialize Firebase
var config = {
    apiKey: "AIzaSyDoV_4SDbJVddun0qTMyEY4MHrfUqCsz_4",
    authDomain: "crawfishboil-797c4.firebaseapp.com",
    databaseURL: "https://crawfishboil-797c4.firebaseio.com",
    projectId: "crawfishboil-797c4",
    storageBucket: "crawfishboil-797c4.appspot.com",
    messagingSenderId: "928175337207"
};
firebase.initializeApp(config);

//Global Firebase variables
var database = firebase.database(); 

// Button for adding a new train
$('#attendeeBtn').on('click', function () {

    //Grabs user input
    var name = $('#nameInput').val().trim(),
        email = $('#emailInput').val().trim(),
        phone = $('#phoneInput').val().trim(),
        rsvp = $('#rsvpInput').val()
        numberInput = $('#numberInput').val();


    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(rsvp);  
    console.log(numberInput);   

    // Creates local "temporary" object for holding train data
    var newAttendee = {
        name: name,
        email: email,
        phone: phone,
        rsvp: rsvp, 
        numberInput: numberInput
    };  
    //Uploads employee data to the database
    database.ref().push(newAttendee);

    console.log(newAttendee.name);
    console.log(newAttendee.email);
    console.log(newAttendee.phone);
    console.log(newAttendee.rsvp);
    console.log(newAttendee.numberInput);   
    // Clears all of the text-boxes
    $('#nameInput').val(' ');
    $('#emailInput').val(' ');
    $('#phoneInput').val(' ');

    return;
}); 

database.ref().on('child_added', function(childSnapshot){
    console.log(childSnapshot.val());

    var sv = childSnapshot.val();  

     // Store everything into a variable
    var name = sv.name,
        email = sv.email,
        phone = sv.phone,
        rsvp = sv.rsvp,
        numberInput = sv.numberInput
    
    // Attendee info
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(rsvp);
    console.log(numberInput);

    $('#addAttendee').append("<tr><td>" + name + "</td><td>" + 
                            rsvp + "</td><td>" + numberInput + "</td></tr>")
});