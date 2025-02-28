import { Link, useLoaderData, Form } from "react-router-dom"

export default function Show(props) {

    const aPet = useLoaderData()
    
    // optional chaining ?.
    const id = aPet?.url.split("/")[4]
    // '?.' - optional chaining that ensures if aPet is present then look for url and whatever comes after it
     
    return (
        <div>
            <h1>{aPet.name}</h1>
            <h2>{aPet.age}</h2>

            <div>
                {/* Update form */}
                <Form action={`/update/${id}/`} method="POST">
                    <label htmlFor="name">
                        Rename you Turtle
                        <input type="text" id="name" name="name" defaultValue={aPet.name}/>
                    </label>
                    
                    <label htmlFor="age">
                        Did they have a birthday?
                        <input type="number" id="age" name="age" defaultValue={aPet.age}/>
                    </label>
                    <button style={{"backgroundColor": "blue"}}>Update our Turtle</button>
                </Form>

                {/* Delete Form */}
                <Form action={`/delete/${id}/`} method="post">
                    <button style={{"backgroundColor": "red"}}>Release Turtle</button>
                </Form>
            </div>

            <Link to="/">
                <button>Go Back</button>
            </Link>


        </div>
    )
}