# pause-for
A tiny JavaScript utility for delaying the execution.

## Installation
```bash
npm install pause-for
```

## Usage
```javascript
const pauseFor = require('pause-for');

doSomething1();
await pauseFor(1000);
doSomething2();
await pauseFor(500);
doSomething3();
```

## API
`pauseFor(ms: number): Promise<void>`
### Parameters
`ms`: The number of milliseconds to wait before resolving the promise.
### Returns
A promise that will be resolved after the specified number of milliseconds.

