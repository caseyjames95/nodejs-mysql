// NPM calls
const mysql = require('mysql2')
const inquirer = require('inquirer')


// Connection to Bamazon App
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bamazon_db'
});

// Display options for app.
let menu = () => {
    console.log('Welcome to Bamazon!')
    inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'Select an option',
        choices: ['Purchase item', 'View items']
    })
        // // See which products are available
        .then(({ choice }) => {
            switch (choice) {
                case 'Purchase item':
                    inquirer.prompt({
                        type: 'input',
                        name: 'return',
                        message: ['Which item would you like to purchase?']
                    })
                        .then(({ choice1 }) => {
                            let item = choice1
                            inquirer.prompt({
                                type: 'input',
                                name: 'return',
                                message: [`what quanity of ${item} would you like to purchase?`],
                            })
                                .catch(e => console.log(e))
                        })

                    break

                case 'View items':
                    connection.execute(
                        'SELECT * FROM `products`',
                        function (err, rows) {
                            console.log(JSON.stringify(rows))
                            process.exit()
                        })
                        
            }
        })
        .catch(e => console.log(e))
}
menu()
// // Purchase item
let purchase = function () {
    console.log('purchase')
}






// // // Switch statement
// // display total
// // check out