export default function HelloWorld(request) {
    const { pathParams, queryParams, site } = request

    let response = {
        message: (`Hello world (brand1)`),
        pathParams: pathParams,
        queryParams: queryParams,
        site: site
    };

    return {
        body: `${JSON.stringify(response)}`,
        statusCode: 200,
        headers: {
            "Cache-control": "no-store",
            "X-Yext-Test": "Example header",
        },
      };
}