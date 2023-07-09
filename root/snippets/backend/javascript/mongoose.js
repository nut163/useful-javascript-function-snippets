const mongoose = require('mongoose');

// Connection to MongoDB
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Define a schema
const CourseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

// Compile our model
const Course = mongoose.model('Course', CourseSchema);

// Create a new course
async function createCourse() {
  const course = new Course({
    name: 'Node.js Course',
    author: 'John Doe',
    tags: ['node', 'backend'],
    isPublished: true
  });

  const result = await course.save();
  console.log(result);
}

// Query documents
async function getCourses() {
  const courses = await Course
    .find({ author: 'John Doe', isPublished: true })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}

// Update a document
async function updateCourse(id) {
  const course = await Course.findById(id);
  if (!course) return;

  course.isPublished = true;
  course.author = 'Another Author';
  
  const result = await course.save();
  console.log(result);
}

// Remove a document
async function removeCourse(id) {
  const result = await Course.deleteOne({ _id: id });
  console.log(result);
}

createCourse();
getCourses();
updateCourse('5a68fdd7f09ad7646ddec17e');
removeCourse('5a68fdd7f09ad7646ddec17e');