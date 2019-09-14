//set express, path and port
const express = require('express');
const path = require('path');
const port = 8000;

//get mongoose for db
const db = require('./config/mongoose');