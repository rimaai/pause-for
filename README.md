# wait-for
A tiny JavaScript utility for delaying the execution.

## Installation
```bash
npm install wait-for
```

## Usage
```javascript
const waitFor = require('wait-for');

doSomething1();
await waitFor(1000);
doSomething2();
await waitFor(500);
doSomething3();
```

## API
`waitFor(ms: number): Promise<void>`
### Parameters
`ms`: The number of milliseconds to wait before resolving the promise.
### Returns
A promise that will be resolved after the specified number of milliseconds.

