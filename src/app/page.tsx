import Navbar from "./component/navbar";
import Hero from "./component/hero";
import CourseCategory from "./component/course-category";
import Assheivement from "./component/assheivement";
import Courses from "./component/courses";
import Teams from "./component/teams";
import CustomerTestimonial from "./component/Customer-testimonials";
import Footer from "./component/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
     <CourseCategory/>
     <Assheivement/>
     <Courses/>
     <Teams/>
     <CustomerTestimonial/>
     <Footer/>
    </div>
  )
}