export default function Form(){

    return(
        <>
        <form claa="compform" action="onSubmit">
            <label> Name: </label>
            <input type="text" placeholder="Enter Name"/>
            <br></br>
            <label>Email: </label>
            <input type="text" placeholder="Enter Email"/>
            <br></br>
            <label>Complaint: </label>
            <input type="text" placeholder="Enter complaint"/>
        </form>
        </>
    );
}