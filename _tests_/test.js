const { execSync } = require('child_process')
const fs = require('fs')

const reconstructedFilename = 'reconstructed.js'

const laundry = () => {
    let solution = fs.readFileSync('./index.js', 'utf-8')

    let foundForLoop = String(solution).indexOf("for") > -1
    let foundWhileLoop = String(solution).indexOf("while") > -1

    return foundForLoop || foundWhileLoop
}


afterAll(() => {
    if (fs.existsSync(reconstructedFilename)) {
        fs.unlinkSync(reconstructedFilename)
    }
})

describe('Laundry Day', () => {
    describe('Check penggunaan loop', () => {
        it('menemukan loop for atau while', () => {
            expect(laundry()).toBe(true)
        })
    })
})
