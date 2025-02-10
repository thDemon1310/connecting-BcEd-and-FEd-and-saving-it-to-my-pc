
const submit = document.getElementById("sub");
function getFileName() {
  let Fname = document.getElementById("fName").value;
  let len = Fname.length;
  if (len == 0) {
    alert(`Please Enter the file name`);
    return 0;
  } else {
    return Fname;
  }
}

function getFileType() {
  let type = document.getElementById("fileType").value;
  let len = type.length;
  if (len == 0) {
    alert(`Please choose the file type`);
    return 0;
  } else {
    return type;
  }
}

function getContent() {
  let con = document.getElementById("infoContent").value;
  if (con === "Select the option") {
    alert("Your file has no content");
    return 0; // Return 0 if no content
  } else {
    return con; // Return the content if present
  }
}

const checker = () => {
  let gfN = getFileName();
  let gfT = getFileType();
  // let submit = document.getElementById("sub");

  if (gfN == 0 || gfT === "Select the option") {
    submit.disabled = true; // Corrected to 'disabled' property
  } else {
    submit.disabled = false;
  }
};

async function postInfo() {
  const fileName = getFileName();
  const fileType = getFileType();
  const content = getContent();
  // Here you can log values or handle them
  console.table([fileName, fileType, content]);
  const res = await fetch("http://10.7.10.91:8383/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parcel: {
        fileName,
        fileType,
        content,
      },
    }),
  });
}

submit.addEventListener("click",postInfo)
submit.addEventListener("mouseover",checker)