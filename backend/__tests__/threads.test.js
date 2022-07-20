require("dotenv").config();

const { MongoClient } = require('mongodb');
const app = require('../index');
const supretest = require('supertest');
const request = supretest(app);
const mongoose = require("mongoose");
const mongodb = require("mongodb");

// Just to test if the jest is working fine
it("Testing to see if Jest works", () => {
    expect(2).toBe(2);
});

// There is a different database for the tests
const databaseURL = process.env.DB_URL
const databaseName = "test"

// This test is to check if data is stored to the database
describe('insert', () => {
    let connection;
    let db;

    beforeAll(async () => {
        connection = await MongoClient.connect(databaseURL)
        db = await connection.db(databaseName)
    });

    afterAll(async () => {
        await connection.close();
    });

    it('check if threads are saved to the database', async () => {
        const titles = db.collection('threads');

        const mockTitle = { _id: '123', title: 'title 1'};
        await titles.insertOne(mockTitle);

        const insertedTitle = await titles.findOne({ _id: '123' });
        expect(insertedTitle).toEqual(mockTitle);
    });

    it('check if threads are deleted from the database', async () => {
        const titles = db.collection('threads');

        const mockTitle = { _id: '321', title: 'title 2'};
        await titles.insertOne(mockTitle);

        await titles.deleteOne({_id: '321'})

        const deletedTitle = await titles.findOne({ _id: '123' });
        expect(deletedTitle).toEqual(null);
    });

    // Cleans up database between each test
    afterEach(async () => {
        const titles = db.collection('threads');
        await titles.deleteMany();
    });
});

