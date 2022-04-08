const express = require('express');
const mysql = require('mysql2');



imquirer 
    .prompt([
        {
            type: 'list',
            message: 'What would you like to view?',
            name: 'view',
            choice: ['view departmenrts', 'view roles', 'view employees', 'add department', 'add role', 'add employee', 'update employee role']
        },
    ])
