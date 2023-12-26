let imageCounter = 0;

function generateRandomImageUrl() {
  // Increment the image counter for each call
  imageCounter++;

  // Use a local placeholder image URL with an incrementing number
  return `https://via.placeholder.com/500x500.png?text=Image${imageCounter}`;
}

function generateDummyData(count, fields) {
  const dummyData = [];

  for (let i = 0; i < count; i++) {
    const item = {};

    fields.forEach((field) => {
      switch (field.type) {
        case "string":
          item[field.name] = generateRandomString();
          break;
        case "number":
          item[field.name] = generateRandomNumber();
          break;
        case "image":
          item[field.name] = generateRandomImageUrl();
          break;
        // Add more types as needed
      }
    });

    dummyData.push(item);
  }

  // Reset the image counter after generating data
  imageCounter = 0;

  return dummyData;
}

function generateRandomString() {
  return Math.random().toString(36).substring(7);
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1; // Adjust the range as needed
}

module.exports = generateDummyData;
