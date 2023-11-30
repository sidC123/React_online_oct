import Button from "../Button";

const NewNavbar = () => {

    const navLinks = ["Home", "About Us", "Contact Us"]

    return (
        <header className="flex justify-between items-center bg-white rounded-lg">
            <div>
                <img src="image.png" width={150} />
            </div>

            <div className="flex gap-4 items-center">
                <ul className="flex items-center gap-4 text-black">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <Button btnText="Buy Now" />
            </div>
        </header>
    )
}

export default NewNavbar;