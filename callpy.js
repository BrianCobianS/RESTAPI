const {spawn} = require('child_process');

//Python app
const py = spawn('python',['Versiones.py']);

py.stdout.on('data', (data)=>{
    console.log(`Stdout ${data}`)
})

py.stderr.on('data', (data)=>{
    console.error(`Stdout ${data}`)
})

py.on('close', (data)=>{
    console.log(`Child process exited with code: ${data}`)
})
