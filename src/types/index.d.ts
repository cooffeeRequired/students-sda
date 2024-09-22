type Geo = {
    lat: string;
    lng: string;
};

type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
};

type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
};

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
};

// validate

function isGeo(geo: any): geo is Geo {
    return typeof geo.lat === 'string' && typeof geo.lng === 'string';
}

function isAddress(address: any): address is Address {
    return typeof address.street === 'string' &&
        typeof address.suite === 'string' &&
        typeof address.city === 'string' &&
        typeof address.zipcode === 'string' &&
        isGeo(address.geo);
}

function isCompany(company: any): company is Company {
    return typeof company.name === 'string' &&
        typeof company.catchPhrase === 'string' &&
        typeof company.bs === 'string';
}

function isUser(response: any): response is User {
    return typeof response.id === 'number' &&
        typeof response.name === 'string' &&
        typeof response.username === 'string' &&
        typeof response.email === 'string' &&
        isAddress(response.address) &&
        typeof response.phone === 'string' &&
        typeof response.website === 'string' &&
        isCompany(response.company);
}
