const fs = require("fs/promises");
const path = require("path");

const folderName = "API(files)";
const folderPath = path.join("/home/utplaksh/Desktop/Web dev/projects/Project6(frontend_backend saving files)", folderName);

// if (!fs.existsSync(folderPath)) {
//     fs.mkdir(folderPath)
// }
const fileCreate = async (fileName, fileType, content) => {
  console.log(`Checking if folder exists`);

  try {
    await fs.access(folderPath); //check if folder exists
    console.log(`The folder is presnet`);
  } catch (error) {
    console.log(`Folder not found\ncreating folder`);
    await fs.mkdir(folderPath);
    console.log(`folder created sucessfully`);
  }
  const filePath = path.join(folderPath, `${fileName}.${fileType}`);
  //   const exist = fs.existsSync(filePath);

  try {
    console.log(`Checking if the file exists`);
    // Check if the file exists asynchronously
    try {
      await fs.access(filePath);
      console.log(`File found, appending to file`);
      content = `\n${content}`;
      await fs.appendFile(filePath, content);
      console.log(`File appended successfully`);
    } catch (error) {
      console.log(`File not found, creating the file`);
      await fs.writeFile(filePath, content);
      console.log(`File created and stored properly`);
    }
  } catch (error) {
    console.error("Error while accessing file:", error);
  }

  /*
  the Bellow code is wrong because fs.access() method throughs an ERROR if file is not found and I have to catch it
*/
  // const fpathChecker = await fs.access(filePath);
  // console.log(`Checking If file exists`);
  // if (!fpathChecker) {
  //   console.log(`File not found, creating the file`);
  //   await fs.writeFile(filePath, content);
  //   console.log(`File created and stored properly`);
  // } else {
  //   console.log(`File found, appending to file`);
  //   content = `\n${content}`;
  //   await fs.appendFile(filePath, content);
  //   console.log(`File appended successfully`);
  // }
  //   console.log(`Writing file`);
  //   await fs.writeFile(filePath, content);
  //   console.log(`File created and store properly`);
};
module.exports = fileCreate;
