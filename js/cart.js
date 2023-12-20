const data = fs.readFileSync('data.json');
const jsonData = JSON.parse(data);

jsonData.users.push({
    name: 'James',
    email: 'james@example.com',
    // or any other data we want to add in that object
  });

fs.writeFileSync('./js/data.json', JSON.stringify(jsonData));