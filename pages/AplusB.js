import { Card, CardHeader, CardBody, Text, Button} from '@chakra-ui/react'
import { useState } from 'react';

export default function AplusB() {
    const [result, setResult] = useState(5);

    function handleClick() {
        setResult(result + 10);
    }

    return (
        <div>
            <Card>
                <CardHeader>
                    <Text variant='head'>
                        A plus B
                    </Text>                    
                </CardHeader>

                <CardBody pt = '15px'>
                    <Text variant='ab'>
                        A = 5; B = 10;
                    </Text>
                    <Button onClick={handleClick}>
                        Click to add B
                    </Button>
                    <Text variant='res'>
                        Result: { result }
                    </Text>
                </CardBody>
            </Card>
        </div>
    );
}