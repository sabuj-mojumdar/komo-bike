import { useState, useEffect } from 'react';
import useAuth from './useAuth';

const useContact = () => {
    const { user } = useAuth();
    const [success, setSuccess] = useState(false);
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        fetch('https://dry-shelf-32044.herokuapp.com/messages')
            .then(res => res.json())
            .then(data => setContacts(data))
    }, []);

    const [newMessage, setNewMessage] = useState({ img: user.photoURL });
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...newMessage };
        newInfo[field] = value;
        setNewMessage(newInfo);
    }

    const handleOnSubmit = e => {
        fetch('https://dry-shelf-32044.herokuapp.com/messages', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(newMessage)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('one message inserted');
                    setSuccess(true);
                    setNewMessage('');
                }
            })

        e.preventDefault();
    }
    return (
        { success, contacts, handleOnBlur, handleOnSubmit }
    );
};

export default useContact;