import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL);

// Optional: Test connection in an async function
// (Remove or comment out in production)
async function testRedis() {
  try {
    await redis.set("foo", "bar");
    const value = await redis.get("foo");
    console.log("Redis test value:", value);
  } catch (error) {
    console.error("Redis connection error:", error);
  }
}

// testRedis();
