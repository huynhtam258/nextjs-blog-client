import queryString from 'query-string';
import slugify from 'slugify';

export const sendRequest = async <T>(props: any) => {
    let {
        url,
        method,
        body,
        queryParams = {},
        useCredentials = false,
        headers = {},
        nextOption = {}
    } = props;

    const options: any = {
        method: method,
        // by default setting the content-type to be json type
        headers: new Headers({ 'content-type': 'application/json', ...headers }),
        body: body ? JSON.stringify(body) : null,
        ...nextOption
    };
    if (useCredentials) options.credentials = "include";

    if (queryParams) {
        url = `${url}?${queryString.stringify(queryParams)}`;
    }

    // return fetch(url, options).then((res: Response) => {
    //     if (res) {
    //         return res.json() as T;
    //     } else {
    //         return res.json().then(function (json) {
    //             // to be able to access error status when you catch the error 
    //             return {
    //                 statusCode: res.status,
    //                 message: json?.message ?? "",
    //                 error: json?.error ?? ""
    //             } as T;
    //         });
    //     }
    // });
    try {
        const res = await fetch(url, options)
        return res.json()
    } catch (error) {
        return error
    }
};

export const convertSlugUrl = (str: string) => {
    if (!str) {
        return ''
    }
    const slug = slugify(str, {
        lower: true,
        locale: 'vi'
    })

    return slug
}

export const getIdBySlug = (slug: string): string => {
    if (!slug) {
        return ''
    }

    const words = slug.split('.html') ?? []
    const str = words[0].split('-')
    const id = str[str.length - 1]
    return id
}