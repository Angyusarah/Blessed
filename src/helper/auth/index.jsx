import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

console.log(url)


export const loginAdmin = async (username, password) => {
    try {
        const res = await axios.post(
            `${url}/admin/login`,
            JSON.stringify({
                User_name: username,
                password: password
            }),       
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return res;
    } catch (error) {
        return error;
    }
};

export const registerAdmin = async (username, password) => {
    try {
        const res = await axios.post(
            `${url}/admin/register`,
            JSON.stringify({
                User_name: username,
                password: password
            }),
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return res;
    } catch (error) {
        error;
    }
};
