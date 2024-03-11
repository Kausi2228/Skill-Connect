function submitProgram() {
    var programFile = document.getElementById("programFile").files[0];
    
    if (programFile) {
        alert("Program file uploaded successfully!");
        // Send the program file to the server for processing
        // Here you can implement the logic to handle the uploaded file
    } else {
        alert("Please select a program file to upload.");
    }
}
