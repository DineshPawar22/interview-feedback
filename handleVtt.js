const sayHello = (text) => {
  // alert(text)
  selectFile();
};

function selectFile() {
  // create a file input element
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".vtt";

  // add an event listener to handle file selection
  input.addEventListener("change", function () {
    const file = input.files[0]; // get the selected file
    const reader = new FileReader(); // create a new FileReader object

    // add an event listener to handle file reading
    reader.addEventListener("load", function () {
      const contents = reader.result; // get the contents of the file
      console.log(contents); // log the contents to the console
    });

    reader.readAsText(file); // read the selected file as text
  });
  // trigger a click event on the file input element to open the popup
  input.click();
}
