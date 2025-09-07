interface ApiResponse {
    status: number;
    message: string;
}

function validateResponse(resp: ApiResponse) {
    console.log(resp.status, resp.message);
}

const goodResp = {status: 200, message: 'OK'};
validateResponse(goodResp);

const badResp = {status: '200', msg: 'OK'};
// validateResponse(badResp); // issue with typing
