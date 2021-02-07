// start your http, grpc, kafka , etc interface here
import fastify from "fastify";
import fastifyCors from "fastify-cors";
import { retrieve_featured } from "./retrieve_featured";
import { retrieve_hotel } from "./retrieve_hotel"
import fastifyStatic from "fastify-static"
import { join } from "path";
import { search } from "./search";
import { retrieve_cities } from "./retrieve_cities";
import { book_hotel } from "./book_hotel";
const app = fastify({ logger: true });


app.register(fastifyStatic, {
  root: join(__dirname, "..", "public"),
  prefix: "/files/",
});
app.register(fastifyCors, {
  origin: "*",
});

app.get("/featured", retrieve_featured);

app.get("/hotel/:slug", retrieve_hotel);
app.get("/search", search);
app.get("/cities", retrieve_cities);
app.post("/book-hotel", book_hotel);
export async function start() {
  try {
    await app.listen(3001);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
