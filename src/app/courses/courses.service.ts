// add service to naming convention
// no declarator for services

export class CoursesService{
    getCourses(){
        // mock data
        // irl, imagine logic here for consuming HTTP service
        // use this logic in multiple places in application
        // unit tests without dependencies on the other
        return ["courseA", "courseB", "courseC"];
    }

}