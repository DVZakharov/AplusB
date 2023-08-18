import { Card, CardHeader, CardBody, Text, Button} from '@chakra-ui/react'
import { useState } from 'react';

export default function AplusB() {
    const [result, setResult] = useState(5);

    function handleClick() {
        setResult(result => result + 10);
    }

    return (
        <div>
            <Card w='171px'>
                <CardHeader>
                    <Text variant='text3'>
                        A plus B
                    </Text>
                </CardHeader>

                <CardBody pt='15px'>
                    <Text variant='text1'>
                        A = 5; B = 10;
                    </Text>
                    <Button onClick={handleClick}>
                        Click to add B
                    </Button>
                    <Text variant='text2'>
                        Result: {result}
                    </Text>
                </CardBody>
            </Card>
        </div>
    );
}