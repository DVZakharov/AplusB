import { Card, CardBody, Text, Button } from '@chakra-ui/react'
import { useState } from 'react';

export default function JsonCard() {
    const [userId, setUserId] = useState(10);
    const [id, setId] = useState(10);
    const [title, setTitle] = useState('hi');
    const [completed, setCompleted] = useState(String(true));

    async function load() {
        let url = 'https://jsonplaceholder.typicode.com/todos/2';
        let obj = await (await fetch(url)).json();
        setUserId(obj.userId);
        setId(obj.id);
        setTitle(obj.title);
        setCompleted(String(obj.completed));
    }

    return (
        <div>
            <Card w = '171px'>
                <CardBody>
                    <Button onClick={load}>
                        Update
                    </Button>
                    <Text variant = 'text1'>
                        UserId: {userId}; <br />
                        Id: {id}; <br />
                        Title: {title}; <br />
                        Completed: {completed};
                    </Text>
                </CardBody>
            </Card>
        </div>
    );
}