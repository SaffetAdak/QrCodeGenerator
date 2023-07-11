import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

const questions = [
    {
      type: 'input',
      name: 'url',
      message: "Enter a URL that you want to convert into Qr Code",
    }
];

inquirer.prompt(questions).then((answers) => {
    fs.writeFile("Url.txt", JSON.stringify(answers, null, '  '), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("File created successfully.");
        }

    const image = qr.image(answers.url, { type: 'png', ec_level: "M", parse_url: true, margin: 1});

    image.pipe(fs.createWriteStream('qr.png'));
    });
  });







