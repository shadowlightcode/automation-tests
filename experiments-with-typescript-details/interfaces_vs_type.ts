// examples with Interfaces
interface User {
    id: number;
    name: string;
}

interface Admin extends User {
    role: 'admin';
}

const admin: Admin = {id: 1, name: 'Alice', role: 'admin'};

interface LoginData {
    username: string;
    password: string;
}

const validUser: LoginData = {
    username: 'testUser',
    password: 'pass123',
}

// examples with Types
// More flexible: can do unions, intersections, primitives, tuples.
// Useful for utility types and advanced constraints.

type Status = 'pass' | 'fail' | 'skip' //union type

type TestResult = {
    id: number;
    status: Status;
}

const result: TestResult = {id: 1, status: 'pass'};
// we can not set status that is not pass/fail/skip
// result.status = 'no'; will be error here


// Combined Type vs Interface

interface ApiResponse {
    status: number;
    message: string;
}

type StatusCode = 200 | 400 | 401 | 500;

type DetailedResponse = ApiResponse & {code: StatusCode}; 

const resp: DetailedResponse = {
    status: 200,
    message: 'OK',
    code: 200,
}


// Rule :
// Use interface for object shapes (Page Objects, API models, test data).
// Use type for unions, primitives, or combining multiple shapes.
// Always prefer strong typing over any, to catch errors before runtime.