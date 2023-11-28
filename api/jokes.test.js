const request = require("supertest")
const db = require("../dbConfig")
const server = require("../server")
const Joke = require("./jokesModel")

const joke1 = {joke: "why did the chicken cross the road?", punshline:"Because it was free range"}
const joke2 = {joke: "why did the chicken cross the road?", punshline:"To avoid this lame joke"}

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db("jokes").truncate()
})

afterAll(async () => {
    await db.destroy()
})

it('correct env var', () => {
    expect(process.env.DB_ENV).toBe("testing")
})

describe("jokes model functions", ()=> {
    describe("create joke", ()=> {
        it("adds new joke to db", async () => {
            let jokes
            await Joke.createJoke(joke1)
            jokes = await db('jokes')
            expect(jokes).toHaveLength(1)

            await Joke.createJoke(joke2)
            jokes = await db('jokes')
            expect(jokes).toHaveLength(2)
        })
        it("inserted joke and punshline", async ()=>{
            const joke = await Joke.createJoke(joke1)
            expect(joke).toMatchObject({joke_id:1,...joke})
        })
    })
    describe("deletes joke", () => {
        it("removes a joke from db", async () => {
            const [joke_id] = await db("jokes").insert(joke1)
            let joke = await db("jokes").where({joke_id}).first()
            expect(joke).toBeTruthy()
            await request(server).delete("/jokes/"+ joke_id)
            joke = await db("jokes").where({joke_id}).first()
            expect(joke).toBefalsy()
        })
    })
} )