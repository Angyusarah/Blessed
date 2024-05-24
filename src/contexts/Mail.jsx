import { createContext, useState } from "react";

export const MailContext = createContext([]);

// eslint-disable-next-line react/prop-types
export function MailProvider({ children }) {
    const [name, setName] = useState('')
    const [content, setContent] = useState('')

    return <MailContext.Provider value={{ name, setName, content, setContent}}>{children}</MailContext.Provider>;
}