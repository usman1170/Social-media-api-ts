import { MyPosts } from "../models/models";

const post1 = new MyPosts({
  title: "Mastering JavaScript: A Comprehensive Guide",
  description:
    "This guide covers all the key concepts of JavaScript from beginner to advanced level. Topics include closures, async/await, and ES6 features.",
  catagory: "Programming",
  inventory: 80,
  onSale: true,
});

const post2 = new MyPosts({
  title: "The Ultimate Guide to Healthy Living",
  description:
    "Discover how to live a healthier life through proper diet, exercise, and mindfulness. This guide provides actionable tips for improving your physical and mental well-being.",
  catagory: "Health",
  inventory: 55,
  onSale: true,
});

const post3 = new MyPosts({
  title: "Exploring the World of Photography",
  description:
    "An in-depth guide to photography techniques and tools for both beginners and professionals. Learn about lighting, composition, and camera settings.",
  catagory: "Photography",
  inventory: 40,
  onSale: true,
});

const post4 = new MyPosts({
  title: "A Journey Through History: Ancient Civilizations",
  description:
    "Explore the fascinating world of ancient civilizations, from Mesopotamia to the Roman Empire. This book takes you on a historical journey through time.",
  catagory: "History",
  inventory: 75,
  onSale: false,
});

module.exports = {
  post1,
  post2,
  post3,
  post4,
};
