const BASE_URL = 'http://blackntt.net:88/api/v1';

export const fetchEmployees = async () => {
    const response = await fetch(`${BASE_URL}/employees`);
    return response.json();
};

export const fetchEmployeeById = async (id: number) => {
    const response = await fetch(`${BASE_URL}/employee/${id}`);
    return response.json();
};

export const updateEmployee = async (id: number, data: any) => {
    const response = await fetch(`${BASE_URL}/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response.json();
};