#@yogesh.exe/dummy-data

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Generate customizable dummy data arrays with ease! `@yogesh.exe/dummy-data` is a lightweight npm package that simplifies the creation of dummy data for your testing and development needs.

## Installation

```bash
npm install dummy-data-khair
```

## Usage

```bash

import generateDummyData from "dummy-data-khair";

function App() {

  const fields = [
    { name: "name", type: "string" },
    { name: "age", type: "number" },
    { name: "avatar", type: "image" },
  ];

  const dummyData = generateDummyData(5, fields);

  return <>{console.log(dummyData)}</>;
}

export default App;

```

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contributing
If you would like to contribute to this project, please follow the Contributing Guidelines.

Author
Yogesh Khair Vashisth.
