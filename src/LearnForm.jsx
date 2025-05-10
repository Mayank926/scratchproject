import './LearnForm.css'

const Form = () => {
    function handleSubmit(formData){
        alert("User "+formData.get("email")+" provided password "
        +formData.get("password")+" employment satus "+formData.get('employmentstatus')
    +" dietryrestrictions "+formData.getAll('dietryrestrictions'));
        
        //alert(formData.get("employmentstatus"))
    }

    return (
        <div className="LearnForm-main">
            <section>
                <h1>Signup Form</h1>
                <form action={handleSubmit} className='forminput'>
                    <label id="emaillbl" htmlFor='email'>Email : </label>
                    <input id="email" type="email" name="email" placeholder='bob@gmail.com' defaultValue="mm@ovi.com"></input>

                    <label id="passwordlbl" htmlFor='password'>Password : </label>
                    <input id="password" type="password" name="password" defaultValue="testpass"></input>

                    <label id="textarealbl" htmlFor='textarea'>Description : </label>
                    <textarea id="textarea" name="textarea" defaultValue="this is my description"></textarea>

                    <fieldset>
                        <legend>Employment Status</legend>
                        <label>
                            <input type='radio' name='employmentstatus' value='unemployed' defaultChecked></input>
                            Unemployed
                        </label>
                        <label>
                            <input type='radio' name='employmentstatus' value='partime'></input>
                            Part Time
                        </label>
                        <label>
                            <input type='radio' name='employmentstatus' value='fulltime'></input>
                            Full Time
                        </label>
                    </fieldset>

                    <fieldset>
                        <legend>Employment Status</legend>
                        <label>
                            <input type='checkbox' name='dietryrestrictions' value='vegan' defaultChecked></input>
                            Vegan
                        </label>
                        <label>
                            <input type='checkbox' name='dietryrestrictions' value='glutenfree'></input>
                            Gluten Free
                        </label>
                        <label>
                            <input type='checkbox' name='dietryrestrictions' value='kosher'></input>
                            Kosher
                        </label>
                    </fieldset>

                    <button>Submit</button>
                </form>
            </section>
        </div>
    );
}

export default Form;