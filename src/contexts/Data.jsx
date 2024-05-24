import { createContext, useState } from "react";

export const DataContext = createContext(null);

// eslint-disable-next-line react/prop-types
export function DataProvider({ children }) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [services, setServices] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [datum, setDatum] = useState([])


    return <DataContext.Provider value={{ name, setName, phone, setPhone, email, setEmail, services, setServices, date, setDate, description, setDescription, datum, setDatum }}
    >{children}</DataContext.Provider>;
}