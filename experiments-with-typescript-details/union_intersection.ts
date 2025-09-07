// Union Type (|)
// Union = 'either/or';
// A varible can hold one of several types.

type TestStatus = 'pass' | 'fail' | 'skip';

function logStatus(status: TestStatus) {
    console.log(status);
}

type SuccessResponse = { status: 200; data: object };
type ErrorResponse = { status: 400 | 500; error: string };

type ApiResp = SuccessResponse | ErrorResponse;

function handleResponse(res: ApiResp) {
  if ("data" in res) {
    console.log("Data:", res.data);
  } else {
    console.error("Error:", res.error);
  }
}

//Intersection Type (&)
// It merges multiple types into one.

interface BaseUser {
    id: number;
    name: string;
}

interface AdminPermissions {
    role: 'admin';
    canDeleteUsers: boolean;
}

type AdminUser = BaseUser & AdminPermissions;

const adminUser: AdminUser = {
    id: 1,
    name: 'Alice',
    role: 'admin',
    canDeleteUsers: true
}

//Merging common test data with specific cases.
//Combining API models with extra metadata.
//Extending Page Objects with custom helpers.

//Union + Intersection Together
type LoginSuccess = { status: 200; token: string };
type LoginError = { status: 401 | 500; message: string };

// Every response has a timestamp
type WithTimestamp = { timestamp: string };

// Combine with intersection
type LoginResponse = (LoginSuccess | LoginError) & WithTimestamp;

const good: LoginResponse = {
  status: 200,
  token: "abc123",
  timestamp: new Date().toISOString(),
};

const bad: LoginResponse = {
  status: 401,
  message: "Unauthorized",
  timestamp: new Date().toISOString(),
};