import { Card, CardBody, Text, Button} from '@chakra-ui/react'

export default function JsonCard() {
	//var id;
	//var name;
	//var done;
	async function load() {
		let url = 'https://jsonplaceholder.typicode.com/todos/2';
		let obj = await (await fetch(url)).json();
		//id = obj.userId;
		//name = obj.title;
		//done = obj.completed;
		//var elem = document.getElementById('id');
		//elem.textContent = 1;
	}

	return (
		<div>
			<Card>
				<CardBody>
					<Button onClick={load}>
						Export
					</Button>					
				</CardBody>
			</Card>
		</div>
	);
}