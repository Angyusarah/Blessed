import axios from "axios";

const url = "https://birthday-site-8fo8.onrender.com"

export const getOrder = async () => {
    try {
        const res = await axios.get(
            `${url}/user/all-orders`,
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

export const sendMail = async (name, content) => {
    try {
        const res = await axios.post(
            `${url}/api/v1/wish/create`,
            JSON.stringify({
                fullNmae: name,
                wish: content,
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

export const getWish = async () => {
    try {
        const res = await axios.get(
            `${url}/contact/all`,
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


export const updateMailStatus = async (id) => {
    try {
        const res = await axios.patch(
            `${url}/contact/update-status/${id}`,
            JSON.stringify({
                Status: "read",
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