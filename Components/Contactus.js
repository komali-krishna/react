const Contactus = () => {
    return(
        <div>
            <h1>this is Contact Us page</h1>
            <form >
                <input className="name" type = "text" placeholder=" name"/>
                <input className ="mail" type ="text" placeholder=" mail-id"/>
                <button className="sub">Submit</button>
            </form>
           
        </div>
    );
}

export default Contactus;