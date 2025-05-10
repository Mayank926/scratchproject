import './LearnForm.css'

const Form = () => {
    function handleSubmit(formData){
        alert("User "+formData.get("email")+" provided password "+formData.get("password"));
    }

    return (
        <div className="LearnForm-main">
            <section>
                <h1>Signup Form</h1>
                <form action={handleSubmit} className='forminput'>
                    <label id="emaillbl" htmlFor='email'>Email : </label>
                    <input id="email" type="email" name="email" placeholder='bob@gmail.com'></input>

                    <label id="passwordlbl" htmlFor='password'>Password : </label>
                    <input id="password" type="password" name="password"></input>

                    <button>Submit</button>
                </form>
            </section>
        </div>
    );
}

export default Form;