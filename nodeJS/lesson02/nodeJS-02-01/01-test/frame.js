function createFrame(width, height) {
    let horizontalLine = '*'.repeat(width);
    let verticalLine = '*'.padEnd(width - 1, ' ') + '*';
    
    console.log(horizontalLine);
    for (let i = 0; i < height - 0; i++) {
        console.log(verticalLine);
    }
    console.log(horizontalLine);
}

createFrame(15, 10);